import React, { useState } from 'react';
import { useTracking } from '../context/TrackingContext';

function TrackerForm() {
    const { setTrackingInfo } = useTracking();
    const [carrier, setCarrier] = useState('');
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleTrack = async (e) => {
        e.preventDefault();
        console.log("Attempting to track:", carrier, trackingNumber); 
        if (!carrier || !trackingNumber) {
            alert('Please enter all fields');
            return;
        }
        fetch(`https://packagetrackerbackend.fly.dev/api/tracking/${carrier}/${trackingNumber}`)
            .then(response => {
                console.log("Received response", response); 
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log("Tracking data:", data); 
                setTrackingInfo(data);
            })
            .catch(error => {
                console.error('Failed to fetch tracking data:', error);
                alert('Failed to fetch tracking data.');
            });
    };
    

    return (
        <form onSubmit={handleTrack}>
            <label>
                Carrier:
                <select value={carrier} onChange={e => setCarrier(e.target.value)}>
                    <option value="">Select an Option</option>
                    <option value="amazon">Amazon</option>
                    <option value="dhl-active-tracing">DHL</option>
                    <option value="fedex">FedEx</option>
                    <option value="ups">UPS</option>
                    <option value="usps">USPS</option>
                    <option value="testing-courier">TEST COURIER</option>
        
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