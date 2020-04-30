import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { Destination } from './destination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private http: HttpClient) { }

  berlinUrl = 'assets/berlin.json';
  srilankanUrl = 'assets/srilanka.json';
  laponieUrl = 'assets/laponie.json';
  name: string;

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
  getBerlinValues(key) {
    if (this.getBerlin().hasOwnProperty(key)) {
      console.log(this.getBerlinValues(key));

      return this.getBerlin()[key];
    }
  }
  getSrilankaValues(key) {
    if (this.getSriLanka().hasOwnProperty(key)) {
      console.log(this.getSrilankaValues(key));

      return this.getSriLanka()[key];
    }
  }

  getLaponieValues(key) {
    if (this.getLaponie().hasOwnProperty(key)) {
      console.log(this.getLaponieValues(key));
      return this.getLaponie()[key];
    }
  }

  getDestinationByName(name: string) {
    if (name === 'berlin') {
      return this.http.get<any>(this.berlinUrl);
    } else if (name === 'laponie') {
      return this.http.get<any>(this.laponieUrl);
    } else {
      return this.http.get<any>(this.srilankanUrl);
    }
  }

  getName(name) {
    this.name = name;
  }

  exportName() {
    return this.name;
  }

  randomizer() {
    const necessaryString = [
      '.destinationPicture1',
      '.theme',
      '.theme',
      '.destination',
      '.destinationDescription',
      '.destinationAnecdote',
      '.ride1',
      '.ride1Picture',
      '.ride2Picture',
      '.ride2',
      '.receipe1',
      '.receipe1',
      '.receipe1',
      '.receipe1',
      '.receipe1',
      '.theme',
      '.receipe2',
      '.receipe2',
      '.receipe2',
      '.receipe2',
      '.receipe2',
      '.theme',
      '.chillPlacePicture',
      '.chillPlace',
      '.theme',
      '.theme',
      '.theme',
      '.destinationPicture1',
      '.theme',
    ];
    const resultArray = [];

    for (const element of necessaryString) {

      const random = ['berlin', 'srilanka', 'laponie'];
      const sortPic = random[Math.floor(Math.random() * random.length)];

      if (sortPic === 'berlin') {

        let resultElement = sortPic + element;
        console.log(sortPic);
        console.log(element);
        console.log(resultElement);
        resultArray.push(this.getBerlinValues(resultElement));
        resultElement = '';

      }
      if (sortPic === 'laponie') {

        let resultElement = sortPic + element;

        this.getLaponieValues(resultElement);
        resultArray.push(this.getLaponieValues(resultElement));
        resultElement = '';

      }
      if (sortPic === 'srilanka') {

        let resultElement = sortPic + element;

        this.getSrilankaValues(resultElement);
        resultArray.push(this.getSrilankaValues(resultElement));
        resultElement = '';
      }

      console.log(resultArray);
      return resultArray;
    }
  }

}

