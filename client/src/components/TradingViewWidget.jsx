// import React, { useEffect, useRef } from 'react';

// function TradingViewWidget() {
//   const scriptRef = useRef(null);

//   useEffect(() => {
//     // Create a script element
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';

//     // Set widget options
//     script.text = JSON.stringify({
//       width: 770,
//       height: 400,
//       currencies: [
//         "EUR",
//         "USD",
//         "JPY",
//         "GBP",
//         "CHF",
//         "AUD",
//         "CAD",
//         "NZD",
//         "CNY"
//       ],
//       isTransparent: false,
//       colorTheme: "light",
//       locale: "en"
//     });

//     // Append the script to the document body and store a reference to it
//     document.body.append(script);
//     scriptRef.current = script;

//     // Clean up the script when the component unmounts
//     return () => {
//       if (scriptRef.current) {
//         document.body.removeChild(scriptRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="tradingview-widget-container">
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright">
//         <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default TradingViewWidget;
