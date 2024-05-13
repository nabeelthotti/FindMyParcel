import React from 'react';
import './Couriers.css';

function Couriers() {
  return (
    <div className="couriers-container">
      <h1 className="couriers-title">List of Couriers</h1>
      <ul className="couriers-list">
        <li>UPS</li>
        <li>FedEx</li>
        <li>DHL</li>
        {/* Add more couriers as needed */}
      </ul>
    </div>
  );
}

export default Couriers;
