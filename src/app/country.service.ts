import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country } from './class'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of([
      {
        id: 1,
        name: 'UK',
      },
      {
        id: 2,
        name: 'England',
      },
      {
        id: 3,
        name: 'Scotland',
      },
      {
        id: 4,
        name: 'Wales',
      }
    ])
  }
}
