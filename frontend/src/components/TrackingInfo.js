import React from 'react';
import { useTracking } from '../context/TrackingContext';

function TrackingInfo() {
    const { trackingInfo } = useTracking();

    const getLastLocation = () => {
        if (!trackingInfo || !trackingInfo.checkpoints || trackingInfo.checkpoints.length === 0) {
            return "Not available";
        }
        const lastCheckpoint = trackingInfo.checkpoints[trackingInfo.checkpoints.length - 1];
        return `${lastCheckpoint.location} (${lastCheckpoint.city}, ${lastCheckpoint.state})`;
    }

    const getFormattedDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    return (
        <div className="result">
            {trackingInfo ? (
                <div>
                    <p>Carrier: {trackingInfo.slug || "Not available"}</p>
                    <p>Tracking Number: {trackingInfo.tracking_number || "Not available"}</p>
                    <p>Status: {trackingInfo.tag || "Not available"}</p>
                    <p>Last Location: {getLastLocation()}</p>
                    <p>Estimated Delivery: {trackingInfo.expected_delivery ? getFormattedDate(trackingInfo.expected_delivery) : "Not available"}</p>
                </div>
            ) : (
                <p>No tracking information available.</p>
            )}
        </div>
    );
}

export default TrackingInfo;
