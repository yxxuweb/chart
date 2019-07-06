import { IBarChartOptions } from '../../domain/chart.domain';

export default class BarChart {
    public context: CanvasRenderingContext2D;

    public options: IBarChartOptions;

    private offsetXLabel: number;

    public constructor(context: CanvasRenderingContext2D, options: IBarChartOptions) {
        this.context = context;
        this.options = options;
    }

    public drawBarChart(): void {
        this.drawAxis();
        this.drawYLabels();
        this.drawXLables();
        // this.drawData();
        this.drawGradient();
    }

    private drawAxis(): void {
        const charZone: number[] = this.options.chartZone;
        this.context.strokeWidth = 4;
        this.context.strokeStyle = '#353535';
        this.context.moveTo(charZone[0], charZone[1]);
        this.context.lineTo(charZone[0], charZone[3]);
        this.context.lineTo(charZone[2], charZone[3]);
        this.context.stroke();
    }

    private drawYLabels(): void {
        const labels: string[] = this.options.yAxisLabel;
        const charZone: number[] = this.options.chartZone;
        const yLength: number = (charZone[3] - charZone[1]) * 0.98;
        const gap: number = yLength / (labels.length - 1);

        labels.forEach((label, index): void => {
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
        });
    }

    private drawXLables(): void {
        const labels: string[] = this.options.xAxisLabel;
        const charZone: number[] = this.options.chartZone;
        const xLength: number = (charZone[2] - charZone[0]) * 0.96;
        const gap: number = xLength / labels.length;
        labels.forEach((label: string, index: number): void => {
            let offset = this.context.measureText(label).width;
            this.context.strokeStyle = '#eaeaea';
            this.context.font = '18px';
            this.context.fillText(label, charZone[0] + (index + 1) * gap - offset, charZone[3] + 20);

            this.context.beginPath();
            this.context.strokeStyle = '#353535';
            this.context.moveTo(charZone[0] + (index + 1) * gap - offset / 2, charZone[3]);
            this.context.lineTo(charZone[0] + (index + 1) * gap - offset / 2, charZone[3] + 5);

            this.context.stroke();
            this.offsetXLabel = offset / 2;
        });
    }

    private drawData(): void {
        const charZone: number[] = this.options.chartZone;
        const xAxisLabel: string[] = this.options.xAxisLabel;
        const data: number[] = this.options.data;
        const xLength: number = (charZone[2] - charZone[0]) * 0.96;
        const yLength: number = (charZone[3] - charZone[1]) * 0.98;
        const gap: number = xLength / xAxisLabel.length;

        data.forEach((item: number, index: number): void => {
            this.context.fillStyle = this.options.barStyle.color || '1abc9c';
            let width: number = this.options.barStyle.width;
            let height: number = (item / this.options.yMax) * yLength;
            let x0: number = charZone[0] + (index + 1) * gap - this.options.barStyle.width / 2 - this.offsetXLabel;
            let y0: number = charZone[3] - height;

            this.context.fillRect(x0, y0, width, height);
        });
    }

    private drawGradient(): void {
        const data: number[] = this.options.data;
        const charZone: number[] = this.options.chartZone;
        const xLength: number = (charZone[2] - charZone[0]) * 0.96;
        const yLength: number = (charZone[3] - charZone[1]) * 0.98;
        let gap = xLength / this.options.xAxisLabel.length;
        const fillStyleGradient = this.context.createLinearGradient(50, 50, 50, 700);
        fillStyleGradient.addColorStop(0, this.options.barStyle.color);
        fillStyleGradient.addColorStop(1, 'rgba(1,176,241,0.6)');

        data.forEach((item: number, index: number): void => {
            this.context.fillStyle = fillStyleGradient;
            let width: number = this.options.barStyle.width;
            let height: number = (item / this.options.yMax) * yLength;
            let x0: number = charZone[0] + (index + 1) * gap - this.options.barStyle.width / 2 - this.offsetXLabel;
            let y0: number = charZone[3] - height;

            this.context.fillRect(x0, y0, width, height);
        });
    }
}
