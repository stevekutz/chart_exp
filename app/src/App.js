import React from 'react';
import {useState} from 'reinspect';
import MyChart from './comp/MyChart';
import MyChart2 from './comp/MyChart2';
import MyColumnChart from './comp/MyColumnChart';
// import BarChartVRainbow from './comp/BarChartVRainbow';
import BarChartExample from './comp/BarChartVRainbow';
import TableRainbowOne from './comp/TableRainbow_1';


function App() {
  return (
    <div>
        <MyChart />
        <BarChartExample/>
        <TableRainbowOne/>
    </div>
  );
}

export default App;
