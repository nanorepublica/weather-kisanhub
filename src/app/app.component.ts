import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Observable } from 'rxjs';

import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

import { dataPoint, Config } from './class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: Config;

  constructor(
    private bottomSheet: MatBottomSheet
  ) { }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(BottomSheetComponent, {
      data: this.config,
    });
    bottomSheetRef.afterDismissed().subscribe(data => {
      this.config = data;
    });
  }
}
