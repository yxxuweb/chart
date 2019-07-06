export interface BarChartOptions {
    chartZone: number[];
    yAxisLabel: string[];
    xAxisLabel: string[];
    yMax: number;
    data: number[];
    barStyle: BarStyle;
    axisArrow?: AxisArrow;
}

interface BarStyle {
    width: number;
    color: string;
}

interface AxisArrow {
    size: number;
    color: string;
}
