const axios = require('axios');
require ('dotenv').config()  

const getTrackingInfo = async (carrier, trackingNumber) => {
  const url = `https://api.aftership.com/v4/trackings/${carrier}/${trackingNumber}`;
  
  try {
    const response = await axios.get(url, {
      headers: {
        'aftership-api-key': process.env.APIKEY,
        'Content-Type': 'application/json'
      }
    });
    return response.data.data.tracking;  // Modify according to the actual response structure
  } catch (error) {
    console.error('Failed to retrieve tracking data:', error);
    return null;
  }
};

module.exports = { getTrackingInfo };
