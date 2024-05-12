import React from 'react';
import './App.css';
import { TrackingProvider } from './context/TrackingContext';
import Home from './pages/Home';

function App() {
    return (
        <TrackingProvider>
            <Home />
        </TrackingProvider>
    );
}

export default App;
