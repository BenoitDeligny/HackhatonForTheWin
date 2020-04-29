import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pimp-my-couch',
  templateUrl: './pimp-my-couch.component.html',
  styleUrls: ['./pimp-my-couch.component.scss']
})
export class PimpMyCouchComponent implements OnInit {

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
    'assets/images/properWheel.png'
  ];

  fins = [
    'assets/images/aileron.png',
    'assets/images/aileron2.jpg'
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
