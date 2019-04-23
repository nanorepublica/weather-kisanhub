import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Metric } from './class';

@Injectable({
  providedIn: 'root',
})
export class MetricService {
  constructor() { }

  getMetrics(): Observable<Metric[]> {
    return of([
      {
        id: 1,
        name: 'Rainfall',
      },
      {
        id: 2,
        name: 'Tmax',
      },
      {
        id: 3,
        name: 'Tmin',
      },
    ]);
  }
}
