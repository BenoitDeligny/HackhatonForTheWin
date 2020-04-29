import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pimp-my-couch',
  templateUrl: './pimp-my-couch.component.html',
  styleUrls: ['./pimp-my-couch.component.scss']
})
export class PimpMyCouchComponent implements OnInit {

  // DISPLAY
  bodyIsDisplay = false;
  engineIsDisplay = true;
  wheelIsDisplay = false;
  finIsDisplay = false;


  // OPTIONS DU CANAPE
  couchBodies = [
    'assets/images/tissuCouch.png',
    'assets/images/cuirCouch.png'
  ];

  engines = [
    'assets/images/fastEngine.png',
    'assets/images/powerfullEngine.png'
  ];

  wheels = [
    'assets/images/fastWheel.png',
    'assets/images/fireWheel.png',
  ];

  fins = [
    'assets/images/aileron.png',
    'assets/images/aileron3.png'
  ];

  // CONSTRUCTION DU CANAPE
  body = '';
  engine = '';
  wheel = '';
  fin = '';

  constructor() { }

  ngOnInit(): void {
  }

  getBody(src: string) {
    this.body = src;
  }

  getEngine(src: string) {
    this.engine = src;
  }

  getWheel(src: string) {
    this.wheel = src;
  }

  getFin(src: string) {
    this.fin = src;
  }
}
