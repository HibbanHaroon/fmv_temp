import axios from 'axios';

const API_BASE_URL = 'https://myvenue.azurewebsites.net/api';

export const login= async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/vendor/auth/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error registering venue:', error);
    throw error;
  }
};
