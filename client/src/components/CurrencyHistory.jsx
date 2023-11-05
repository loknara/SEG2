import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CurrencyHistory.css';
//import USToEuroChart from "./Chart.png";



  function CurrencyHistory() {
    return (
        <div className="currensee-container">
          <div className="header">
            <h1>CURRENCY HISTORY</h1>
          </div>
         
            <div>
            <img src= "./images/Chart.jpeg" />
            </div>
          
          
            <div style={{ display: 'flex'}} className="buttons">
            <button style={{ marginleft: "auto" }}>US</button>
            <button style={{ marginleft: "auto" }}>Euro</button>
            <button style={{ marginleft: "auto" }}>Weekly</button>
          </div>



        </div>
       

      );
    }


export default CurrencyHistory;