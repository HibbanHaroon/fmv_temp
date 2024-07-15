import axios from 'axios';

const API_BASE_URL = 'https://myvenue.azurewebsites.net/api';

export const registerVerify = async (emailSignup, password) => {
  try {
    const email = emailSignup;
    let data;

    if(password!='email'){
       data = { email, password }; 
    }
    let response;
  
       response = await axios.post(`${API_BASE_URL}/vendor/check/verify`, email);
    return response.data;
  } catch (error) {
    console.error('Error checking email verification:', error);
    throw error;
  }
};
