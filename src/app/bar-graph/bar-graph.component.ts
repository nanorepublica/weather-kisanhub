import { Component, OnInit, Input } from '@angular/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { dataPoint, Config } from '../class';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent implements OnInit {
  @Input() dataPoints: dataPoint[];
  @Input() config: Config;

  constructor() { }

  view: any[] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendPosition = 'below'
  showXAxisLabel = false;
  xAxisLabel = 'Time';
  showYAxisLabel = false;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  ngOnInit() { }

  ngOnChanges(changes) {
    if (changes.config && !changes.config.firstChange) {
      this.yAxisLabel = changes.config.currentValue.metric.name;
    }
    if (changes.dataPoints && !changes.dataPoints.firstChange) {
      this.dataPoints = changes.dataPoints.currentValue.map(item => ({
        name: `${item.month}/${item.year}`,
        value: item.value,
      }));
    }
  }
}
