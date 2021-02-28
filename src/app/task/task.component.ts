import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  @Output()
  OnSelected: EventEmitter<TaskComponent> = new EventEmitter();

  @Output()
  OnDeleted: EventEmitter<TaskComponent> = new EventEmitter();

  isSelected: boolean;
  isDeleted: boolean;
  isShow: boolean;
  x: number;

  constructor() { }

  

  ngOnInit(): void {
    
  }

  select() {
    this.OnSelected.emit(this);
  }

  delete() {
    this.OnDeleted.emit(this);
  }

}
