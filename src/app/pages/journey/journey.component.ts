import { Component, OnInit} from '@angular/core';
import { DestinationsService } from 'src/app/shared/destinations.service';
import { Destination } from 'src/app/shared/destination';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
  constructor(private destinationService: DestinationsService) { }

  berlin: Destination;
  srilanka: Destination;
  laponie: Destination;

  randomResult: any[];
  selectedDestination: Destination;

  berlinDestination() {
      this.destinationService.getBerlin().subscribe(
        (data) => {this.berlin = data; });
      }
      laponieDestination() {
        this.destinationService. getLaponie().subscribe(
          (data) => {this.laponie = data; });
      }
      sriLankaDestination() {
        this.destinationService. getSriLanka().subscribe(
          (data) => {this.srilanka = data; });
      }
  ngOnInit(): void {

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
      this.selectedDestination = this.laponie;
    }, 1000);
    }
}

