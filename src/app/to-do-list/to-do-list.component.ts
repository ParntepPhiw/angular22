import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Task } from '../task'
import { TaskComponent } from '../task/task.component'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @ViewChildren(TaskComponent)
  taskItems: QueryList<TaskComponent>;

  @Input()
  toDo: string;
  desc: string;


  tasks: Task[];
  x: number;

  constructor() {
    this.tasks = [];
    this.tasks.push({
      name: 'Coffee',
      description: 'Coffee Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi alias vero pariatur veritatis maxime sint, quod laudantium quisquam commodi! Nesciunt.'
    });
    this.tasks.push({
      name: 'Breakfast',
      description: 'Breakfast Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi alias vero pariatur veritatis maxime sint, quod laudantium quisquam commodi! Nesciunt.'
    });
  }

  addTask() {
    if (this.toDo.length > 0) {
        this.tasks.push({
          name: this.toDo,
          description: this.desc
        });
        
    }
  }

  deletedTask(taskComponent: TaskComponent) {
    alert(`Task ${taskComponent.task.name} with index ${this.tasks.indexOf(taskComponent.task)} will be deleted`);
    this.taskItems.forEach(p => {
      p.isDeleted = false;
    });
    taskComponent.isDeleted = true;
    if (taskComponent.isSelected = true) {
      this.tasks.splice(this.tasks.indexOf(taskComponent.task), 1);
      this.tasks = this.tasks;
    
    }
  }

  selectedTask(taskComponent1: TaskComponent) {
    // alert(`Task ${taskComponent1.task.name} was selected`);
    this.taskItems.forEach(p => {
      p.isSelected = false;
      p.isShow = false;
    });
    taskComponent1.isSelected = true;
    taskComponent1.isShow = true;
  }

  ngOnInit(): void {
  }

}
