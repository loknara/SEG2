import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './LiveTracker.css';

function LiveTracker() {
const data = [
    {
      name: '11/27/2023',
      euro: 0.914655,
      gbp: 0.79318,
    },
    {
      name: '11/28/2023',
      euro: 0.908905,
      gbp: 0.787,
    },
    {
      name: '11/29/2023',
      euro: 0.911845,
      gbp: 0.78862,
    },
    {
      name: '11/30/2023',
      euro: 0.916445,
      gbp: 0.7912,
    },
    {
      name: '12/01/2023',
      euro: 0.918895,
      gbp: 0.78816,
    },

  ];

  const renderLineChart = (
    <div className='graph'>
    <LineChart width={1200} height={600} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
      <Line type="monotone" dataKey="euro" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={['auto', 'auto']} />
      <Tooltip />
      <Legend />
    </LineChart>
    </div>
  );


  return (
     renderLineChart
  );

}

export default LiveTracker;
