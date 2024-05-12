import React from 'react';
import { useTracking } from '../context/TrackingContext';

function TrackingInfo() {
    const { trackingInfo } = useTracking();

    return (
        <div className="result">
            {trackingInfo ? (
                <div>
                    <p>Carrier: {trackingInfo.carrier}</p>
                    <p>Tracking Number: {trackingInfo.trackingNumber}</p>
                    <p>Status: {trackingInfo.status}</p>
                    <p>Last Location: {trackingInfo.lastLocation}</p>
                    <p>Estimated Delivery: {trackingInfo.estimatedDelivery}</p>
                </div>
            ) : (
                <p>No tracking information available.</p>
            )}
        </div>
    );
}

export default TrackingInfo;
