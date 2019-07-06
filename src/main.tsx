import React, { useState, ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/Store';

import CounterView from './components/CounterView/CounterView';
import StopWatchView from './components/StopWatchView/StopWatchView';

import { BarChartOptions } from './domain/chart.domain';
import BarChart from './utils/chart/BarChart';
import './main.less';

function App(): ReactElement {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <div>{count}</div>
            <button onClick={(): void => setCount(count + 1)}>+</button>
            <CounterView />
            <StopWatchView />
        </div>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const options: BarChartOptions = {
    chartZone: [50, 50, 1000, 700], // 标识绘图区域
    yAxisLabel: ['0', '100', '200', '300', '400'], // 标识Y轴坐标
    xAxisLabel: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // 标识X轴坐标
    yMax: 400, // Y轴最大值
    data: [10, 50, 200, 330, 390, 320, 220], // 柱状图数据
    barStyle: {
        width: 70, // 柱状图数据
        color: '#1abc9c', // 柱状图颜色
    },
};

new BarChart(context, options).drawBarChart();
