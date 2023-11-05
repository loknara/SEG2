import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SavedCurrencyConversions.css';



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

          <a href= "https://www.google.com/finance/quote/USD-EUR?sa=X&ved=2ahUKEwjS44644KiCAxW6k2oFHYTyBGYQmY0JegQIBhAr" target="_blank">
            
            <img src="./images/DollarToEuroChart.png" alt="chart"/>
            
            </a>

            <a href= "https://www.google.com/finance/quote/USD-GBP?sa=X&ved=2ahUKEwi09cvx6KiCAxW7kWoFHcRqAFgQmY0JegQIBhAr" target="_blank">
            
            <img src=".file:///Users/arjunprabhune/Workshops/SEG2/client/src/images/DollarToPoundChart.png" alt="chart"/>
            
            </a>
          
            <div className="buttons">
            <button>View More Saved</button>
          </div>



        </div>
       

      );
    }


export default SavedCurrencyConversions;