import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { dataPoint } from './class'


@Injectable({
  providedIn: 'root'
})
export class S3DataService {

  private baseDataUrl = "https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/";

  constructor(private http: HttpClient) { }

  getData(metric: string, location: string): Observable<dataPoint[]> {
    const url = `${this.baseDataUrl}${metric}-${location}.json`
    return this.http.get<dataPoint[]>(url).pipe(
      tap(_ => this.log(`fetched ${metric}-${location}`)),
      catchError(this.handleError<dataPoint[]>('getData', []))
    )
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message)
  }
}
