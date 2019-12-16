import React from 'react';
import {useState} from 'reinspect';
import MyChart from './comp/MyChart';
import MyChart2 from './comp/MyChart2';
import MyColumnChart from './comp/MyColumnChart';
// import BarChartVRainbow from './comp/BarChartVRainbow';
import BarChartExample from './comp/BarChartVRainbow';



function App() {
  return (
    <div>
        <MyChart />
        <BarChartExample/>
    </div>
  );
}

export default App;
