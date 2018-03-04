import { Component } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements  Observer {

  lessons: Lesson[] = [];

  constructor() {
    // Register the component itself
    console.log('lesson list component is registered as observer ...');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
  }

  notify(data: Lesson[]) {
    console.log('Lessons list component receive data...');
    this.lessons = data;
  }
}
