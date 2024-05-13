import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Couriers from './pages/Couriers/Couriers';
import API from './pages/API/API';
import About from './pages/About/About';
import { TrackingProvider } from './context/TrackingContext';


function App() {
  return (
    <TrackingProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/couriers" element={<Couriers />} />
        <Route path="/api" element={<API />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </TrackingProvider>
  );
}

export default App;
