// Created by Lokesh Narasani
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function HomePage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          // User is signed in.
          setUser(authUser);
        } else {
          // User is signed out.
          setUser(null);
        }
      });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

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
            {!user && <button onClick={navigateToLogin}>Login/Signup</button>}
            <button><Link to="https://www.oanda.com/currency-converter/en/?from=USD&to=EUR&amount=1">Quick Currency Convertor</Link></button>
          </div>
        </div>
      );
    }

export default HomePage;
