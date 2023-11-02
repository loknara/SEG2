// Example for HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
  const navigate = useNavigate();

    const navigateToLogin = () => {
        console.log('Financial News clicked');
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
            <button onClick={navigateToLogin} >Login/Sign-Up</button>
            <button>Quick Currency</button>
          </div>
        </div>
      );
    }

export default HomePage;
