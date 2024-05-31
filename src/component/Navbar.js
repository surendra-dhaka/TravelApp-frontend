// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = ({ resetSearch }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link" onClick={resetSearch}>planyourtrail</Link>
      </div>
      <div className="nav-menu">
        <Link to="/" className="nav-item" onClick={resetSearch}>Explore Destinations</Link>
        <Link to="/favourite" className="nav-item">Favourite places</Link>
      </div>
      <div className="nav-actions">
        <button className="login-button">Login</button>
        <button className="menu-button">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
