import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component'

import { S3DataService } from './s3-data.service'
import { dataPoint, Config } from './class'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weatherData: dataPoint[];
  config: Config

  constructor(
    private bottomSheet: MatBottomSheet,
    private s3DataService: S3DataService
  ) { }

  getData(config: Config) {
    this.s3DataService.getData(config.metric.name, config.country.name)
      .subscribe(data => this.weatherData = data);
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(BottomSheetComponent);
    const sub = bottomSheetRef.instance.configEvent.subscribe((data) => {
      this.config = data;
      this.getData(data);
    });
  }
}
