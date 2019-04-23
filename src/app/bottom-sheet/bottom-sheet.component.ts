import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MatDatepickerInputEvent,
  MatDatepicker,
  MAT_DATE_FORMATS,
} from '@angular/material';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment } from 'moment';

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

import { CountryComponent } from '../country/country.component';
import { MetricComponent } from '../metric/metric.component';
import { DisplayChoiceComponent } from '../display-choice/display-choice.component';

import { Config } from '../class';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
})
export class BottomSheetComponent implements AfterViewInit {
  config: Config;
  startDate = new FormControl(moment('01/1920', MY_FORMATS.parse.dateInput));
  endDate = new FormControl(moment())

  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {
  }

  @Output() configEvent = new EventEmitter<Config>();

  @ViewChild(CountryComponent) countryChild;
  @ViewChild(MetricComponent) metricChild;
  @ViewChild(DisplayChoiceComponent) displayChild;

  ngAfterViewInit() {
    if (this.config === undefined) {
      this.config = {
        country: this.countryChild.selectedCountry,
        metric: this.metricChild.selectedmetric,
        startDate: this.startDate.value,
        endDate: this.endDate.value,
        display: this.displayChild.selectedDisplay,
      };
    }
  }

  closeBottomSheet(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  saveConfig(event: MouseEvent): void {
    this.config = {
      country: this.countryChild.selectedCountry,
      metric: this.metricChild.selectedmetric,
      startDate: this.startDate.value,
      endDate: this.endDate.value,
      display: this.displayChild.selectedDisplay,
    };
    this.configEvent.emit(this.config);
    this.closeBottomSheet(event);
  }

  getDateType(type: string) {
    switch (type) {
      case 'start':
        return this.startDate;
      case 'end':
        return this.endDate;
    }
  }

  chosenYearHandler(normalizedYear: Moment, type: string) {
    const ctrlValue = this.getDateType(type).value
    ctrlValue.year(normalizedYear.year());
    this.getDateType(type).setValue(ctrlValue);
  }

  chosenMonthHandler(
    normalizedMonth: Moment,
    type: string,
    datepicker: MatDatepicker<Moment>
  ) {
    const ctrlValue = this.getDateType(type).value;
    ctrlValue.month(normalizedMonth.month());
    this.getDateType(type).setValue(ctrlValue);
    datepicker.close();
  }
}
