import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Task} from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.less']
})

export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() removedTask = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {  }

  changeStatus() {
    this.task.isDone = !this.task.isDone;
  }
  removeTask() {
    this.removedTask.emit(this.task);
  }

}
