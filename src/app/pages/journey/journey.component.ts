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

  constructor(private router: Router, private route: ActivatedRoute, private destinationService: DestinationsService) { }

  selectedDestination: Observable<Destination>;

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
      params => this.selectedDestination = this.destinationService.getDestinationByTheme(params.get('theme')
    ));

    this.berlinDestination();
    this.laponieDestination();
    this.sriLankaDestination();
    setTimeout(() => {
      console.log(this.selectedDestination);
    }, 1000);
  }
}

