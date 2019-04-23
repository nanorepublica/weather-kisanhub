import { Component, OnInit } from '@angular/core';

import { MetricService } from '../metric.service';

import { Metric } from '../class';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
})
export class MetricComponent implements OnInit {
  availableMetrics: Metric[];
  selectedmetric: Metric;

  onSelect(metric: Metric): void {
    this.selectedmetric = metric;
  }

  getMetrics(): void {
    this.metricService.getMetrics()
      .subscribe(metrics => this.availableMetrics = metrics);
  }

  constructor(private metricService: MetricService) { }

  ngOnInit() {
    this.getMetrics();
    this.onSelect(this.availableMetrics[0]);
  }
}
