import React from 'react';
import {useState} from 'reinspect';
import MyChart from './comp/MyChart';
import MyChart2 from './comp/MyChart2';
import MyColumnChart from './comp/MyColumnChart';
// import BarChartVRainbow from './comp/BarChartVRainbow';
import BarChartExample from './comp/BarChartVRainbow';
import TableRainbowOne from './comp/TableRainbow_1';
import ButtonRainbow from './comp/ButtonRainbow';
import TimePickerExample from './comp/TimePicker';
// import ReCaptchaExample from './comp/Recaptcha';
import SimpleVisualPicker from './comp/VisualPicker';
import SliderExample from './comp/SliderExample';
import SimpleRatingExample from './comp/SimpleRatingExample';
import MyBarChart from './comp/MyBarChart';

function App() {
  return (
    <div>
        <MyChart />
        <BarChartExample/>
        <TableRainbowOne/>
        <ButtonRainbow/>
        <TimePickerExample/>
        <SimpleVisualPicker/>
        <SliderExample/>
        <SimpleRatingExample/>
        <MyBarChart/>
    </div>
  );
}

export default App;
