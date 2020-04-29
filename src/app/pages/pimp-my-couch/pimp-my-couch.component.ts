import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-pimp-my-couch',
  templateUrl: './pimp-my-couch.component.html',
  styleUrls: ['./pimp-my-couch.component.scss']
})
export class PimpMyCouchComponent implements OnInit {

  constructor() { }

  // DISPLAY
  bodyIsDisplay = false;
  engineIsDisplay = false;
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

  // CANAPE PIMPE
  finalCouch = [];

  // CONSTRUCTION DU CANAPE
  body = '';
  engine = '';
  wheel = '';
  fin = '';

  // DRAG AND DROP
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.couchBodies, event.previousIndex, event.currentIndex);
    moveItemInArray(this.engines, event.previousIndex, event.currentIndex);
    moveItemInArray(this.wheels, event.previousIndex, event.currentIndex);
    moveItemInArray(this.fins, event.previousIndex, event.currentIndex);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnInit(): void {
  }

  setbodyIsDisplay() {
    this.bodyIsDisplay = true;
    this.engineIsDisplay = false;
    this.finIsDisplay = false;
    this.wheelIsDisplay = false;
  }
  setengineIsDisplay() {
    this.bodyIsDisplay = false;
    this.engineIsDisplay = true;
    this.finIsDisplay = false;
    this.wheelIsDisplay = false;
  }
  setwheelIsDisplay() {
    this.bodyIsDisplay = false;
    this.engineIsDisplay = false;
    this.wheelIsDisplay = true;
    this.finIsDisplay = false;
  }
  setfinIsDisplay() {
    this.bodyIsDisplay = false;
    this.engineIsDisplay = false;
    this.wheelIsDisplay = false;
    this.finIsDisplay = true;
  }
}
