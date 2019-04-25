import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment } from 'moment';

import { Config, dataPoint } from '../class';
import { S3DataService } from '../s3-data.service';
@Component({
  selector: 'app-detail-wrapper',
  templateUrl: './detail-wrapper.component.html',
  styleUrls: ['./detail-wrapper.component.css']
})
export class DetailWrapperComponent implements OnInit {
  @Input() config: Config;

  weatherData: dataPoint[];
  dataPoints: Observable<dataPoint[]>;

  showTable: Boolean;
  showBarChart: Boolean;

  getData(config: Config): void {
    const obs = this.s3DataService.getData(config.metric.name, config.country.name)
    obs.subscribe(data => this.weatherData = data.filter(item => {
      var itemDate = moment(`${item.year}-${item.month}`, 'YYYY-MM')
      return this.config.startDate <= itemDate && itemDate <= this.config.endDate
    }))
  }

  constructor(private s3DataService: S3DataService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.config) {
      this.getData(changes.config.currentValue)
      this.showTable = changes.config.currentValue.display.id === 1
      this.showBarChart = changes.config.currentValue.display.id === 2
    }
  }
}
