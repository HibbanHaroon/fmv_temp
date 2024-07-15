import axios from 'axios';

const API_BASE_URL = 'https://myvenue.azurewebsites.net/api';

export const reset= async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/vendor/forget/password`, email);
    return response.data;
  } catch (error) {
    console.error('Error registering venue:', error);
    throw error;
  }
};
export const resetPassword= async (email,password) => {
    try {
      console.log(email)
      console.log(password)
      const data={email,password}
      const response = await axios.post(`${API_BASE_URL}/vendor/reset-password`, data);
      return response.data;
    } catch (error) {
      console.error('Error registering venue:', error);
      throw error;
    }
  };