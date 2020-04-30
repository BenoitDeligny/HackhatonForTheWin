import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private http: HttpClient) {}

  berlinUrl = 'assets/berlin.json';
  srilankanUrl = 'assets/srilanka.json';
  laponieUrl = 'assets/laponie.json';

  getBerlin(): Observable<any> {
    return this.http.get<any>(this.berlinUrl);
  }
  getSriLanka(): Observable<any> {
    return this.http.get<any>(this.srilankanUrl);
  }
  getLaponie(): Observable<any> {
    return this.http.get<any>(this.laponieUrl);
  }
}

