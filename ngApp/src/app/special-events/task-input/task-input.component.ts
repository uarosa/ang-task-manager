import { Component, OnInit, Input } from '@angular/core';

import {Task} from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.less']
})
export class TaskInputComponent implements OnInit {

@Input() tasks: Array<Task>;
  taskText: string;
  constructor() { }

  ngOnInit() {
  }
createTask() {
    const newTask = {
        id: this.tasks.length,
        text: this.taskText,
        isDone: false
    };
    this.tasks.push(newTask);
    this.taskText = '';
  }

}
