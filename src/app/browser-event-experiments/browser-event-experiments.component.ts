import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

  hoverSection: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');

    // We are receiveng a continuous stream of events, each event
    // contains some data
    this.hoverSection.addEventListener('mousemove', ev => {
      console.log(ev); // print the event, corresponde to event -mouse coordinate
    });


  }

}
