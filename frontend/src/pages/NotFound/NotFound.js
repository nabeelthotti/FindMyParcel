import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 

function NotFound() {
  return (
    <div className="notFoundContainer">
      <h1 className="notFoundTitle">404 - Page Not Found</h1>
      <p className="notFoundText">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="notFoundLink">Go Home</Link>
    </div>
  );
}

export default NotFound;
