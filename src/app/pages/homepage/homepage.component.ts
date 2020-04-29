import { Component, OnInit } from '@angular/core';
import { DestinationsService } from 'src/app/shared/destinations.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
