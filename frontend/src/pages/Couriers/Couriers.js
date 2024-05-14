import React from 'react';
import './Couriers.css';

function Couriers() {
  return (
    <div className="couriers-container">
      <h1 className="couriers-title">Currentley Supported Couriers</h1>
      <ul className="couriers-list">
        <li><a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="courier-link"><i className="icon amazon-icon"></i>Amazon</a></li>
        <li><a href="https://www.dhl.com" target="_blank" rel="noopener noreferrer" className="courier-link"><i className="icon dhl-icon"></i>DHL</a></li>
        <li><a href="https://www.fedex.com" target="_blank" rel="noopener noreferrer" className="courier-link"><i className="icon fedex-icon"></i>FedEx</a></li>
        <li><a href="https://www.ups.com" target="_blank" rel="noopener noreferrer" className="courier-link"><i className="icon ups-icon"></i>UPS</a></li>
        <li><a href="https://www.usps.com" target="_blank" rel="noopener noreferrer" className="courier-link"><i className="icon usps-icon"></i>USPS</a></li>
        <li className="inactive">More Coming Soon!</li>
      </ul>
    </div>
  );
}

export default Couriers;
