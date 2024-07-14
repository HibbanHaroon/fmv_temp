
const API_BASE_URL = 'https://myvenue.azurewebsites.net/api';

export const registerVenue = async (venueData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/vendor/venue/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(venueData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error registering venue:', error);
    throw error;
  }
};
