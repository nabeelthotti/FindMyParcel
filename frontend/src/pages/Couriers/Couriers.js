// Importing React and other necessary components
import React from 'react';


// Importing images
import amazonIcon from './amazon_icon.png'; // Adjust the path as necessary
import dhlIcon from './dhl_icon.png';
import fedexIcon from './fedex_icon.png';
import upsIcon from './ups_icon.png';
import uspsIcon from './usps_icon.png';

// Importing the CSS
import './Couriers.css';

function Couriers() {
  return (
    <div className="couriers-container">
      <h1 className="couriers-title">Currently Supported Couriers</h1>
      <ul className="couriers-list">
        <li>
          <a href="https://track.amazon.com/" target="_blank" rel="noopener noreferrer" className="courier-link">
            <i className="icon" style={{ backgroundImage: `url(${amazonIcon})` }}></i>Amazon
          </a>
        </li>
        <li>
          <a href="https://www.dhl.com/us-en/home/tracking.html" target="_blank" rel="noopener noreferrer" className="courier-link">
            <i className="icon" style={{ backgroundImage: `url(${dhlIcon})` }}></i>DHL
          </a>
        </li>
        <li>
          <a href="https://www.fedex.com/en-us/tracking.html" target="_blank" rel="noopener noreferrer" className="courier-link">
            <i className="icon" style={{ backgroundImage: `url(${fedexIcon})` }}></i>FedEx
          </a>
        </li>
        <li>
          <a href="https://www.ups.com/track?loc=en_US&requester=ST/" target="_blank" rel="noopener noreferrer" className="courier-link">
            <i className="icon" style={{ backgroundImage: `url(${upsIcon})` }}></i>UPS
          </a>
        </li>
        <li>
          <a href="https://tools.usps.com/go/TrackConfirmAction_input" target="_blank" rel="noopener noreferrer" className="courier-link">
            <i className="icon" style={{ backgroundImage: `url(${uspsIcon})` }}></i>USPS
          </a>
        </li>
        <li className="inactive">
          More Coming Soon!
        </li>
      </ul>
    </div>
  );
}

export default Couriers;
