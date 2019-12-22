import React from 'react';
import {Chart, Dataset} from 'react-rainbow-components';


const datasets = [ 
    {
        title: 'Data-Red',
        backgroundColor: '#fe4849',
        values: [18, 42, 58, 50, 19, undefined],
    }
]

const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const arr = [1, 0, 1, 2, 3, 4, 5];

const MyBarChart = () => {
    
    return (
        <Chart labels = {labels} type = 'bar'>
            <Dataset title = 'simple' values = {arr} backgroundColor = 'lightblue'/>
        </Chart>

    )



}
export default MyBarChart;