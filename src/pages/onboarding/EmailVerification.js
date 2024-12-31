import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerVerify } from '../../api/registerverify.request';

const EmailVerification = ({ email, password }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;

    const checkEmailVerification = async () => {
      try {
        const response = await registerVerify(email, password);
        if (response.verified) {
          clearInterval(intervalId);
          const { accessToken, refreshToken } = response;
          saveTokens(accessToken, refreshToken);
          navigate('/success');
        }
      } catch (error) {
        console.error('Error checking email verification:', error);
      }
    };

    intervalId = setInterval(checkEmailVerification, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [email, password, navigate]);

  const saveTokens = (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    if (refreshToken) {
      const secureOptions = {
        sameSite: 'strict',
        httpOnly: true,
        secure: true, 
        path: '/', 
      };
      document.cookie = `refreshToken=${refreshToken}; ${Object.entries(secureOptions)
        .map(([key, value]) => `${key}=${value}`)
        .join('; ')}`;
    }
  };

  return null;
};

export default EmailVerification;
