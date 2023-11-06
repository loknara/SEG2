import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SavedCurrencyConversions.css';
//Created by Arjun Prabhune



  function SavedCurrencyConversions() {
    return (
        <div className="currensee-container">
          <div className="header">
            <h1>SAVED CONVERSIONS</h1>
            </div>
          <div className="welcome-section">
            <h2>Store all your saved conversions in one location!</h2>
            <p>Save the hassle of converting the same currencies repeatedly and save them all under one folder!</p>
          </div>


          
          

            <div className="titles">
              <h4>USD to Euro</h4>
            </div>


          <a href= "https://www.google.com/finance/quote/USD-EUR?sa=X&ved=2ahUKEwjS44644KiCAxW6k2oFHYTyBGYQmY0JegQIBhAr" target="_blank">
            
            <img src="https://d3fy651gv2fhd3.cloudfront.net/charts/euro-area-currency.png?s=eurusd&v=202311032315V20230410&h=400&w=640&lbl=0&ismobile=1" alt="chart"/>
            
            </a>

            <div className="titles">
              <h4>USD to GBP</h4>
            </div>

            <a href= "https://www.google.com/finance/quote/USD-GBP?sa=X&ved=2ahUKEwi09cvx6KiCAxW7kWoFHcRqAFgQmY0JegQIBhAr" target="_blank">
            
            <img src="https://cdn.statcdn.com/Statistic/270000/271669-blank-754.png" alt="chart"/>
            
            </a>
          

            <div className="buttons">
            <button>View More Saved</button>
          </div>



        </div>
       

      );
    }


export default SavedCurrencyConversions;