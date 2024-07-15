import axios from 'axios';

const API_BASE_URL = 'https://myvenue.azurewebsites.net/api';

export const checkVerify = async (emailSignup,emailObj, password, pass) => {
  try {
    const email = emailObj.email;
    let data;
    console.log(password)
    console.log(emailSignup)
    if(password!='email'){
       data = { email, password: pass ? true : false }; 
    }
    let response;
    if(password=='email'){
       response = await axios.post(`${API_BASE_URL}/vendor/check/verify`, email);
    }else{
       response = await axios.post(`${API_BASE_URL}/vendor/check/verify`, data);
    }
    return response.data;
  } catch (error) {
    console.error('Error checking email verification:', error);
    throw error;
  }
};
