import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricComponent } from './metric/metric.component';
import { CountryComponent } from './country/country.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatDatepickerModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatDividerModule,
} from '@angular/material';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TableDisplayComponent } from './table-display/table-display.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { DetailWrapperComponent } from './detail-wrapper/detail-wrapper.component';
import { DisplayChoiceComponent } from './display-choice/display-choice.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    MetricComponent,
    CountryComponent,
    BottomSheetComponent,
    TableDisplayComponent,
    BarGraphComponent,
    DetailWrapperComponent,
    DisplayChoiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatMomentDateModule,
    MatInputModule,
    MatDividerModule,
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [BottomSheetComponent],
})
export class AppModule { }
