import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DisplayType } from './class'

@Injectable({
  providedIn: 'root'
})
export class DisplayTypeService {

  constructor() { }

  getDisplayTypes(): Observable<DisplayType[]> {
    return of([
      {
        id: 1,
        name: 'Table',
      },
      {
        id: 2,
        name: 'Bar Chart',
      },
    ]);
  }
}
