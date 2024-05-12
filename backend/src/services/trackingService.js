const trackingData = {
    ups: { status: 'In Transit', lastLocation: 'New York, NY', estimatedDelivery: '2023-05-18' },
    usps: { status: 'Delivered', lastLocation: 'Boston, MA', estimatedDelivery: '2023-05-10' },
    fedex: { status: 'Delayed', lastLocation: 'Chicago, IL', estimatedDelivery: '2023-05-20' }
  };
  
  function getTrackingInfo(carrier, trackingNumber) {
    return trackingData[carrier.toLowerCase()] || null;
  }
  
  module.exports = { getTrackingInfo };
  