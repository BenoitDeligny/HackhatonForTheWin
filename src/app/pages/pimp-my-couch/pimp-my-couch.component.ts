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


  // A REMPLACER PAR DU DRAG&DROP
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
  // END

  setbodyIsDisplay() {
    this.engineIsDisplay = !this.engineIsDisplay;
    this.bodyIsDisplay = !this.bodyIsDisplay;
    this.wheelIsDisplay = !this.wheelIsDisplay;
    this.finIsDisplay = !this.finIsDisplay;
  }
  setengineIsDisplay() {
    this.engineIsDisplay = !this.engineIsDisplay;
    this.bodyIsDisplay = !this.bodyIsDisplay;
    this.wheelIsDisplay = !this.wheelIsDisplay;
    this.finIsDisplay = !this.finIsDisplay;
  }
  setwheelIsDisplay() {
    this.wheelIsDisplay = !this.wheelIsDisplay;
    this.bodyIsDisplay = !this.bodyIsDisplay;
    this.finIsDisplay = !this.finIsDisplay;
    this.engineIsDisplay = !this.engineIsDisplay;
  }
  setfinIsDisplay() {
    this.finIsDisplay = !this.finIsDisplay;
    this.bodyIsDisplay = !this.bodyIsDisplay;
    this.wheelIsDisplay = !this.wheelIsDisplay;
    this.engineIsDisplay = !this.engineIsDisplay;
  }
}
