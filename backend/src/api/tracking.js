const express = require('express');
const trackingService = require('../services/trackingService');
const router = express.Router();
const cors = require('cors');

router.get('/:carrier/:trackingNumber', (req, res) => {
    const { carrier, trackingNumber } = req.params;
    const trackingInfo = trackingService.getTrackingInfo(carrier, trackingNumber);
    if (trackingInfo) {
        res.json(trackingInfo);
    } else {
        res.status(404).send('Tracking information not found');
    }
});

module.exports = router;