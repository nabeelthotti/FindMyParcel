const express = require('express');
const trackingService = require('../services/trackingService');
const router = express.Router();

router.get('/:carrier/:trackingNumber', async (req, res) => {
    const { carrier, trackingNumber } = req.params;
    console.log("Received API request for:", carrier, trackingNumber); // Log incoming request
    try {
      const trackingInfo = await trackingService.getTrackingInfo(carrier, trackingNumber);
      console.log("Tracking Info:", trackingInfo); // Log the info received from the service
      if (trackingInfo) {
        res.json(trackingInfo);
      } else {
        res.status(404).send('Tracking information not found');
      }
    } catch (error) {
      console.error('Failed to process the tracking request', error);
      res.status(500).send('Failed to process the tracking request');
    }
  });
  

module.exports = router;
