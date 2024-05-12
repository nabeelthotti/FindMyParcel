import React from 'react';
import TrackerForm from '../components/TrackerForm';
import TrackingInfo from '../components/TrackingInfo';

function Home() {
    return (
        <div>
            <h1>Global Shipment Tracker</h1>
            <TrackerForm />
            <TrackingInfo />
        </div>
    );
}

export default Home;
