import React, { useState } from 'react';
import { useTracking } from '../context/TrackingContext';

function TrackerForm() {
    const { setTrackingInfo } = useTracking();
    const [carrier, setCarrier] = useState('');
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleTrack = async (e) => {
        e.preventDefault();
        if (!carrier || !trackingNumber) {
            alert('Please enter all fields');
            return;
        }
        fetch(`http://localhost:9999/api/tracking/${carrier}/${trackingNumber}`)
            .then(response => response.json())
            .then(data => setTrackingInfo(data))
            .catch(error => console.error('Failed to fetch tracking data:', error));
    };

    return (
        <form onSubmit={handleTrack}>
            <label>
                Carrier:
                <select value={carrier} onChange={e => setCarrier(e.target.value)}>
                    <option value="">Select a Carrier</option>
                    <option value="ups">UPS</option>
                    <option value="usps">USPS</option>
                    <option value="fedex">FedEx</option>
                </select>
            </label>
            <label>
                Tracking Number:
                <input type="text" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)} />
            </label>
            <button type="submit">Track Package</button>
        </form>
    );
}

export default TrackerForm;
