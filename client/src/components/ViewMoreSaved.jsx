import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewMoreSaved.css';
//Created by Arjun Prabhune


    function openUSDToEuro () {
        window.open('https://www.google.com/finance/quote/USD-EUR?sa=X&ved=2ahUKEwjXlKPOgM-CAxX4mmoFHQoiCR0QmY0JegQIBhAr');
    }
    function openUSDToGBP () {
        window.open('https://www.google.com/finance/quote/USD-GBP?sa=X&ved=2ahUKEwig_N7Xg8-CAxUbomoFHWN5DnoQmY0JegQIBRAr');
    }
    function openEuroToGBP () {
        window.open('https://www.google.com/finance/quote/EUR-GBP?sa=X&sqi=2&ved=2ahUKEwiQ8sPkg8-CAxVZmmoFHcYDCxIQmY0JegQIEBAr');
    }
    function openUSDToINR () {
        window.open('https://www.google.com/finance/quote/USD-INR?sa=X&sqi=2&ved=2ahUKEwjci9Lug8-CAxX_kiYFHWr-BSQQmY0JegQIFRAr');
    }
    function openEuroToINR () {
        window.open('https://www.google.com/finance/quote/EUR-INR?sa=X&sqi=2&ved=2ahUKEwi12sr6g8-CAxUXlGoFHS7DB4EQmY0JegQIDhAr');
    }
    function openUSDToJPY () {
        window.open('https://www.google.com/finance/quote/USD-JPY?sa=X&sqi=2&ved=2ahUKEwiDjaODhM-CAxUKlWoFHeA2C8UQmY0JegQIGxAr');
    }
    function openJPYToEuro () {
        window.open('https://www.google.com/finance/quote/JPY-EUR?sa=X&sqi=2&ved=2ahUKEwiQwJ-LhM-CAxVZmWoFHZhpDlAQmY0JegQIDhAr');
    }
    function openJPYToGBP () {
        window.open('https://www.google.com/finance/quote/JPY-GBP?sa=X&sqi=2&ved=2ahUKEwjH25WThM-CAxWrmmoFHfzIBOkQmY0JegQIDhAr');
    }
    function openJPYToINR () {
        window.open('https://www.google.com/finance/quote/JPY-INR?sa=X&sqi=2&ved=2ahUKEwjotfychM-CAxVCnWoFHdAGC1AQmY0JegQIGxAr');
    }
    function openINRToEuro () {
        window.open('https://www.google.com/finance/quote/INR-EUR?sa=X&sqi=2&ved=2ahUKEwjb1N-lhM-CAxWxlWoFHUO7C2kQmY0JegQIEhAr');
    }
    function openINRToJPY () {
        window.open('https://www.google.com/finance/quote/INR-JPY?sa=X&ved=2ahUKEwjM28WuhM-CAxV2mmoFHYncDaQQmY0JegQIBhAr');
    }
    function openEuroToCAD () {
        window.open('https://www.google.com/finance/quote/EUR-CAD?sa=X&sqi=2&ved=2ahUKEwjH-Oe7hM-CAxWzmmoFHZxkDxUQmY0JegQIERAr');
    }


  function ViewMoreSaved() {

    

    return (
        <div className="currensee-container">
          <div className="header">
            <h1>VIEW MORE SAVED</h1>
            </div>
          <div className="welcome-section">
            <h2>View all of your saved conversions in one location!</h2>
            <p>The following conversions are ones you have saved!</p>
          </div>


          <div className="buttons">
            <button onClick={openUSDToEuro}><h4>USD To Euro</h4></button>
            <button onClick={openUSDToGBP}><h4>USD To GBP</h4></button>
            <button onClick={openEuroToGBP}><h4>Euro To GBP</h4></button>
            <button onClick={openUSDToINR}><h4>USD To INR</h4></button>
            <button onClick={openEuroToINR}><h4>Euro To INR</h4></button>
            <button onClick={openUSDToJPY}><h4>USD To JPY</h4></button>
          </div>

          <div className="buttons">
            <button onClick={openJPYToEuro}><h4>JPY To Euro</h4></button>
            <button onClick={openJPYToGBP}><h4>JPY To GBP</h4></button>
            <button onClick={openJPYToINR}><h4>JPY To INR</h4></button>
            <button onClick={openINRToEuro}><h4>INR To Euro</h4></button>
            <button onClick={openINRToJPY}><h4>INR To JPY</h4></button>
            <button onClick={openEuroToCAD}><h4>Euro to CAD</h4></button>
          </div>
        
        </div>
       

      );
    }


export default ViewMoreSaved;