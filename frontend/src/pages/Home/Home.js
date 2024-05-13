import React from 'react';
import './Home.css'; // Ensure the CSS is properly linked
import TrackerForm from '../../components/TrackerForm';
import TrackingInfo from '../../components/TrackingInfo';

function Home() {
    return (
        <div className="home-page">
            <div className="home-form">
                <TrackerForm />
            </div>
            <div className="home-info">
                <TrackingInfo />
            </div>
        </div>
    );
}

export default Home;
