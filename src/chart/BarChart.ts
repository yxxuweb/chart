import { BarChartOptions } from '../domain/chart';

export default class BarChart {
    public context: CanvasRenderingContext2D;

    public options: BarChartOptions;

    public constructor(context: CanvasRenderingContext2D, options: BarChartOptions) {
        this.context = context;
        this.options = options;
    }

    public drawBarChart(): void {
        this.drawAxis();
        this.drawYLabels();
    }

    private drawAxis(): void {
        const charZone = this.options.chartZone;
        this.context.strokeWidth = 4;
        this.context.strokeStyle = '#353535';
        this.context.moveTo(charZone[0], charZone[1]);
        this.context.lineTo(charZone[0], charZone[3]);
        this.context.lineTo(charZone[2], charZone[3]);
        this.context.stroke();
    }

    private drawYLabels() {
        const labels = this.options.yAxisLabel;
        const charZone = this.options.chartZone;
        const yLength = (charZone[3] - charZone[1]) * 0.98;
        const gap = yLength / (labels.length - 1);

        labels.forEach((label, index) => {
            let offset = this.context.measureText(label).width + 20;
            this.context.strokeStyle = '#eaeaea';
            this.context.font = '16px';
            this.context.fillText(label, charZone[0] - offset, charZone[3] - index * gap);

            this.context.beginPath();
            this.context.strokeStyle = '#353535';
            this.context.moveTo(charZone[0] - 10, charZone[3] - index * gap);
            this.context.lineTo(charZone[0], charZone[3] - index * gap);
            this.context.stroke();

            this.context.beginPath();
            this.context.strokeStyle = '#eaeaea';
            this.context.strokeWidth = 2;
            this.context.moveTo(charZone[0], charZone[3] - index * gap);
            this.context.lineTo(charZone[2], charZone[3] - index * gap);
            this.context.stroke();
        })
    }
}
