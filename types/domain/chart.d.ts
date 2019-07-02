export interface BarChartOptions {
    chartZone: number[];
    yAxisLabel: string[];
    xAxisLabel: string[];
    yMax: number;
    data: number[];
    barStyle: BarStyle;
}
interface BarStyle {
    width: number;
    color: string;
}
export {};
