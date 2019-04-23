import { Component, OnInit, Input } from '@angular/core';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment } from 'moment';

const moment = _moment;

import { Config, dataPoint } from '../class';

@Component({
  selector: 'app-detail-wrapper',
  templateUrl: './detail-wrapper.component.html',
  styleUrls: ['./detail-wrapper.component.css']
})
export class DetailWrapperComponent implements OnInit {
  @Input() dataPoints: dataPoint[];
  @Input() config: Config;

  showTable: Boolean
  showBarChart: Boolean

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes) {
    if (changes.dataPoints && !changes.dataPoints.firstChange) {
      this.dataPoints = changes.dataPoints.currentValue.filter(item => {
        var itemDate = moment(`${item.year}-${item.month}`, 'YYYY-MM')
        return this.config.startDate <= itemDate && itemDate <= this.config.endDate
      })
    }
    if (changes.config && !changes.config.firstChange) {
      this.showTable = changes.config.currentValue.display.id === 1
      this.showBarChart = changes.config.currentValue.display.id === 2
    }
  }
}
