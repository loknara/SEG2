// // Created by Lokesh Narasani


// import React, { useEffect } from 'react';

// function Heatmap() {
//   useEffect(() => {
//     // Create the script element
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
//     script.async = true;
//     script.innerHTML = JSON.stringify({
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

//     // Append the script to the widget container
//     document.querySelector('.tradingview-widget-container__widget').appendChild(script);

//     // Cleanup the script when the component unmounts
//     return () => {
//       document.querySelector('.tradingview-widget-container__widget').removeChild(script);
//     }
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <div className="tradingview-widget-container">
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright">
//         <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Heatmap;


import React, { useEffect } from 'react';

function HeatMap() {
  useEffect(() => {
 // Create a script element
 const script = document.createElement('script');
 script.type = 'text/javascript';
 script.async = true;
 script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
 
 // Set widget options
 
 // Append the script to the document body
 document.body.appendChild(script);

 // Clean up the script when the component unmounts
 return () => {
   document.body.removeChild(script);
 };
}, []);

useEffect(() => {
  const head = document.querySelector("head");
  const script = document.createElement("script");

  script.setAttribute("src", 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js');
  script.text = JSON.stringify({
   width: 770,
   height: 400,
   currencies: [
     "EUR",
     "USD",
     "JPY",
     "GBP",
     "CHF",
     "AUD",
     "CAD",
     "NZD",
     "CNY"
   ],
   isTransparent: false,
   colorTheme: "light",
   locale: "en"
 });

  head.appendChild(script);

  return () => {
    head.removeChild(script);
  };
}, ['https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js']);

return (
 <div className="tradingview-widget-container">
   <div className="tradingview-widget-container__widget"></div>
   <div className="tradingview-widget-copyright">
     <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
       <span className="blue-text">Track all markets on TradingView</span>
     </a>
   </div>
 </div>
);
}


export default HeatMap;


// import React from 'react';
// import TradingViewWidget from './TradingViewWidget'; // Adjust the import path as necessary

// const HeatMap = () => {
//   return (
//     <div>
//       <h1>My Trading Dashboard</h1>
//       <TradingViewWidget />
//     </div>
//   );
// };

// export default HeatMap;


// import React, { useState } from 'react';
// import TradingViewWidget from './TradingViewWidget'; // Adjust the import path

// function HeatMap() {
//   const [showWidget, setShowWidget] = useState(false);

//   const handleToggleWidget = () => {
//     setShowWidget(!showWidget);
//   };

//   return (
//     <div className="App">
//       <button onClick={handleToggleWidget}>
//         {showWidget ? 'Hide Widget' : 'Show Widget'}
//       </button>

//       {showWidget && <TradingViewWidget />}
//     </div>
//   );
// }

// export default HeatMap;


// import { Helmet } from "react-helmet"

// export default function HeatMap() {
//   return (
//     <>
//       <Helmet>
        
         
//           <div class="tradingview-widget-container">
//             <div class="tradingview-widget-container__widget"></div>
//             <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
//             <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js" async>
//             {
//             "width": 770,
//             "height": 400,
//             "currencies": [
//               "EUR",
//               "USD",
//               "JPY",
//               "GBP",
//               "CHF",
//               "AUD",
//               "CAD",
//               "NZD",
//               "CNY"
//             ],
//             "isTransparent": false,
//             "colorTheme": "light",
//             "locale": "en"
//           }
//             </script>
//           </div>
//       </Helmet>
//       ...
//     </>
//   )
// }
