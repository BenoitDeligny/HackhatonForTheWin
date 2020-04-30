import { Component, OnInit } from '@angular/core';
import { DestinationsService } from 'src/app/shared/destinations.service';
import { Destination } from 'src/app/shared/destination';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
  berlin: Destination;
  srilanka: Destination;
  laponie: Destination;

  destinations: Destination[] = [];
  randomResult: any[];

  constructor(private router: Router, private route: ActivatedRoute, private destinationService: DestinationsService) { }

  selectedDestination: Destination;
  destinationSelected: Observable<Destination>;

  berlinDestination() {
    this.destinationService.getBerlin().subscribe(
      (data) => { this.berlin = data; });
  }

  laponieDestination() {
    this.destinationService.getLaponie().subscribe(
      (data) => { this.laponie = data; });
  }

  sriLankaDestination() {
    this.destinationService.getSriLanka().subscribe(
      (data) => { this.srilanka = data; });
  }


  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => this.destinationSelected = this.destinationService.getDestinationByTheme(params.get('theme')
      ));
    this.destinationService.getBerlin().subscribe(
        (data) => {this.berlin = data; });

    this.destinationService. getSriLanka().subscribe(
        (data) => {this.srilanka = data; });

    this.destinationService. getLaponie().subscribe(
        (data) => {this.laponie = data; });

    this.randomResult = this.destinationService.randomizer();

    this.berlinDestination();
    this.laponieDestination();
    this.sriLankaDestination();
    setTimeout(() => {
        console.log(this.selectedDestination);
      }, 1000);

    this.destinationService.getBerlin().subscribe(
      (data) => { this.berlin = data; });

    this.destinationService.getSriLanka().subscribe(
      (data) => { this.srilanka = data; });

    this.destinationService.getLaponie().subscribe(
      (data) => { this.laponie = data; });

      }

}




