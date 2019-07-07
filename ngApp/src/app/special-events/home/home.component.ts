import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  @Input() title: string;
  tasks: Array<Task>;
  constructor() {
  this.tasks = [
      {
          id: 1,
          text: 'clean house',
          isDone : false
      },
      {
          id: 2,
          text: 'learn angular',
          isDone: false
      }
    ];
  }
  removedTask(task: Task) {
    console.log(task);
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
}

  ngOnInit() {  }
}
