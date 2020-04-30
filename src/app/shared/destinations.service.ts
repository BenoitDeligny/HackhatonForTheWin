import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { Destination } from './destination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private http: HttpClient) {}

  berlinUrl = 'assets/berlin.json';
  srilankanUrl = 'assets/srilanka.json';
  laponieUrl = 'assets/laponie.json';

  getBerlin(): Observable<any> {
    return this.http.get<any>(this.berlinUrl).pipe(
      map(
          (jsonObject: Destination) => jsonObject
    ));
  }
  getSriLanka(): Observable<any> {
    return this.http.get<any>(this.srilankanUrl);
  }
  getLaponie(): Observable<any> {
    return this.http.get<any>(this.laponieUrl);
  }
  getDestinationByTheme(theme: string) {
   if (theme === 'urban') {
      return this.http.get<any>(this.berlinUrl);
   } else if (theme === 'winter') {
    return this.http.get<any>(this.laponieUrl);
   } else {
    return this.http.get<any>(this.srilankanUrl);
   }
  }
}

