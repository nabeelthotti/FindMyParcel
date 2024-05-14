import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [activePage, setActivePage] = useState('home');
  const [language, setLanguage] = useState('en');

  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <header className="header">
      <Link
        to="/"
        className={`header-link ${activePage === 'home' ? 'active' : ''}`}
        onClick={() => handleSetActivePage('home')}
        style={{ color: activePage === 'home' ? 'white' : '#007BFF' }}
      >
        Find My Parcel
      </Link>
      <nav>
        <Link
          to="/couriers"
          className={`header-link ${activePage === 'couriers' ? 'active' : ''}`}
          onClick={() => handleSetActivePage('couriers')}
          style={{ color: activePage === 'couriers' ? 'white' : '#5884af' }}
        >
          Couriers
        </Link>
        <Link
          to="/api"
          className={`header-link ${activePage === 'api' ? 'active' : ''}`}
          onClick={() => handleSetActivePage('api')}
          style={{ color: activePage === 'api' ? 'white' : '#16a085' }}
        >
          API
        </Link>
        <Link
          to="/about"
          className={`header-link ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => handleSetActivePage('about')}
          style={{ color: activePage === 'about' ? 'white' : '#8e44ad' }}
        >
          About
        </Link>
        <select
          value={language}
          onChange={handleLanguageChange}
          style={{
            padding: '2px',
            color: '#af354c',
            fontFamily: 'inherit',
            fontWeight: 'bold',
            fontSize: '15px',
            marginLeft: '10px'
          }}
          className="header-link"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="ar">Arabic</option>
          <option value="ru">Russian</option>
          <option value="ja">Japanese</option>
          <option value="pt">Portuguese</option>
          <option value="hi">Hindi</option>
        </select>
      </nav>
    </header>
  );
}

export default Header;
