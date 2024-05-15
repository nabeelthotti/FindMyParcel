import React from 'react';
import './About.css';
import nabeelPic from './nabeel.png'; // Ensure the import name matches the usage

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={nabeelPic} alt="Nabeel Thotti" /> {/* Use the imported image variable here */}
      </div>
      <div className="about-text">
        <h1 className="about-title">About This Site</h1>
        <p className="about-content">
          Hello! My name is Nabeel Thotti, the founder and developer behind this platform. With a passion for improving logistical efficiencies, I created this site to help individuals and businesses find the most reliable courier services quickly and effortlessly. Here, you'll find a curated list of courier services, up-to-date tracking tools, and resources designed to enhance your tracking experiences. Whether you're sending a personal package or managing deliveries, this site is engineered to support your needs. Thank you for trusting this site with your courier needs!
        </p>
      </div>
    </div>
  );
}

export default About;
