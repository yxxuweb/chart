import { BarChartOptions } from './domain/chart';
import BarChart from './chart/BarChart';
import './main.less';

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const options: BarChartOptions = {
    chartZone: [50, 50, 1000, 8000], // 标识绘图区域
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
