// Created by Lokesh Narasani


import React, { useEffect } from 'react';

function Heatmap() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "currencies": [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY",
        "TRY",
        "DKK",
        "THB",
        "MXN",
        "KWD"
      ],
      "isTransparent": false,
      "colorTheme": "light",
      "locale": "en"
    });

    // Append the script to the widget container
    document.querySelector('.tradingview-widget-container__widget').appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.querySelector('.tradingview-widget-container__widget').removeChild(script);
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default Heatmap;


// import React, { useEffect } from 'react';

// function HeatMap() {
//   useEffect(() => {
//     // Function to add the script
//     const addScript = scriptText => {
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.async = true;
//       script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
//       // Insert the script configuration
//       script.innerHTML = scriptText;
//       document.body.appendChild(script);
//     };

//     // Define the script content
//     const scriptContent = JSON.stringify({
//       "width": "100%",
//       "height": "100%",
//       "currencies": [
//         "EUR",
//         "USD",
//         "JPY",
//         "GBP",
//         "CHF",
//         "AUD",
//         "CAD",
//         "NZD",
//         "CNY",
//         "TRY",
//         "DKK",
//         "THB",
//         "MXN",
//         "KWD"
//       ],
//       "isTransparent": false,
//       "colorTheme": "light",
//       "locale": "en"
//     });

//     // Add the script
//     addScript(scriptContent);

//     // Cleanup function to remove the script
//     return () => {
//       // Remove the script from the document
//       const scripts = document.getElementsByTagName('script');
//       for (let i = scripts.length - 1; i >= 0; i--) {
//         const script = scripts[i];
//         if (script.src.includes('embed-widget-forex-heat-map.js')) {
//           script.parentNode.removeChild(script);
//         }
//       }
//     };
//   }, []);

//   return (
//     <div className="tradingview-widget-container">
//       {/* The widget will be inserted here by the TradingView script */}
//       <div id="tradingview_37e07"></div>
//     </div>
//   );
// }

// export default HeatMap;
