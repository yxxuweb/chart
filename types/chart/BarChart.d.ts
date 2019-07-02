import { BarChartOptions } from '../domain/chart';
export default class BarChart {
    context: CanvasRenderingContext2D;
    options: BarChartOptions;
    constructor(context: CanvasRenderingContext2D, options: BarChartOptions);
    drawBarChart(): void;
    private drawAxis;
}
