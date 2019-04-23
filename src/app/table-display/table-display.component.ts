import { Component, OnInit, Input } from '@angular/core';

import { Config, dataPoint } from '../class';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {
  @Input() dataPoints: dataPoint[];
  @Input() config: Config;

  columnsToDisplay = ['date', 'value']
  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes) { }

}
