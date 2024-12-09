const API_URI = "/endpoint_to_post_data"

export const callApi = async (postData) => {
  try {
      console.log(postData)
      const response = await fetch(API_URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
};