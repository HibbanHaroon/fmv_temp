import axios from 'axios';

const API_BASE_URL = 'https://myvenue.azurewebsites.net/api';

export const register= async (signupData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/vendor/auth/register`, signupData);
    return response.data;
  } catch (error) {
    console.error('Error registering venue:', error);
    throw error;
  }
};
