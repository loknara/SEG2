import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/ResourcesPage">ResourcesPage</Link>
      <Link to="/SavedCurrencyConversions">Saved Conversions</Link>
      <Link to="/CurrencyHistory">Currency History</Link>
      <Link to="/Contact">Contact Us</Link>
      {/* <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
      <Link to="/page4">Page 4</Link> */}
    </nav>
  );
}

export default Navbar;
