import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        setUser(authUser ? authUser : null);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    auth.signOut();
    navigate('/');
  };

  // Render the navbar only if the user is signed in
  return (
    user ? (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/ResourcesPage/FinancialNews">Resources Page</Link>
        <Link to="/SavedCurrencyConversions">Saved Conversions</Link>
        <Link to="/CurrencyHistory">Currency History</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/HeatMap">Heat Map</Link>
        <Link to="/LiveTracker">Currency Timeline</Link>
        <button className="but" onClick={handleSignOut}>Sign Out</button>
      </nav>
    ) : null
  );
}

export default Navbar;
