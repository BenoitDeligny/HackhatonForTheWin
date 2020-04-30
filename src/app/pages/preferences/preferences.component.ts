import { Component, OnInit } from '@angular/core';
import { DestinationsService } from 'src/app/shared/destinations.service';
import { Destination, Receipe, Ingredient, Step } from 'src/app/shared/destination';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  berlin: Destination;
  srilanka: Destination;
  laponie: Destination;
  selectedDestination: Destination;
  randomDestination: Destination;

  destinations: Destination[] = [];
  randomResult: any;
  random: any[];

  constructor(private destinationService: DestinationsService) { }


  ngOnInit(): void {

    this.destinationService.getBerlin().subscribe(
      (data) => {
        this.berlin = data;
        this.selectedDestination = data;
        this.destinations.push(data);
      });

    this.destinationService.getSriLanka().subscribe(
      (data) => {
        this.srilanka = data;
        this.destinations.push(data);
      });

    this.destinationService.getLaponie().subscribe(
      (data) => {
        this.laponie = data;
        this.destinations.push(data);
      });

    setTimeout(() => {
      this.randomizer();
    }, 1000);
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

    const randomValue = [];
    this.randomResult = [];

    const resultObject = {
    };



    for (const destination of this.destinations) {
      for (const element in destination) {
        if (destination.hasOwnProperty(element)) {
          randomValue.push(destination[element]);
        }
      }
    }

    for (let index = 0; index < necessaryString.length; index++) {


      const random = ['berlin', 'srilanka', 'laponie'];
      const sortPic = random[Math.floor(Math.random() * random.length)];

      if (sortPic === 'berlin') {
        this.randomResult.push(randomValue[index]);

        console.log(randomValue[index]);
      }
      if (sortPic === 'srilanka') {

        this.randomResult.push(randomValue[index + 15]);
      }
      if (sortPic === 'laponie') {
        console.log(sortPic);

        this.randomResult.push(randomValue[index + 30]);
      }
    }
    console.log(resultObject);
    console.log(this.randomResult);
    return this.randomResult;

  }


}
