import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  task: Task;

  @Output()
  OnSelected: EventEmitter<DetailsComponent> = new EventEmitter();
  OnDeleteTask: EventEmitter<DetailsComponent> = new EventEmitter();

  isSelected: boolean;
  isDeletedTask: boolean;

  constructor() { }

  

  ngOnInit(): void {
    
  }

  select() {
    this.OnSelected.emit(this);
  }

  deleteTask() {
    this.OnDeleteTask.emit(this);
  }

}
