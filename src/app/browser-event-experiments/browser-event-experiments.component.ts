import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

  hoverSection: HTMLElement;

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');

    // We are receiveng a continuous stream of events, each event
    // contains some data
    // hoverSection is like subject of a pattern
    this.hoverSection.addEventListener('mousemove', onMouseMove);

    this.hoverSection.addEventListener('click', onClick);

  }

  unsuscribe() {
    console.log('Called Unsuscribe()');
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

}

// The advantage is that we can actually now unsubscribe from this sequence
// of events from this stream of mouse events.
function onMouseMove(ev: MouseEvent) {
  console.log('onMouseMove', ev);
}

function onClick(ev: MouseEvent) {
  console.log('onClick', ev);
}

