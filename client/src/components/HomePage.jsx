// Example for HomePage.js
import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    console.log('Login button clicked');
    navigate('/Login');
};  
  return (
        <div className="currensee-container">
          <div className="header">
            <h1>CURRENSEE</h1>
          </div>
          <div className="welcome-section">
            <h2>Welcome to Currensee!</h2>
            <p>Currensee is an interactive currency tracker with live updates!</p>
          </div>
          <div className="buttons">
            <button onClick={navigateToLogin}>Login/Signup</button>
            <button>Quick Currency</button>
          </div>
        </div>
      );
    }

export default HomePage;
