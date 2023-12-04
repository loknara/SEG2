import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CurrencyHistory.css';
//import USToEuroChart from "./Chart.png";
// Created by Arjun Prabhune



  function CurrencyHistory() {
    return (
        <div className="currensee-container">
          <div className="header">
            <h1>CURRENCY HISTORY</h1>
          </div>
         
          <div>
            <img src= "https://www.poundsterlinglive.com/images/2022/H2/EURUSD_2022-11-14_14-12-53.png" alt="Chart"/>
            </div>
          
          
            <div style={{ display: 'flex'}} className="buttons">
            <button className='histButton' style={{ marginleft: "auto" }}><h4>Euro</h4></button>
            <button className='histButton' style={{ marginleft: "auto" }}><h4>US</h4></button>
            <button className='histButton' style={{ marginleft: "auto" }}><h4>Weekly</h4></button>
          </div>

        

        </div>
       

      );
    }


export default CurrencyHistory;