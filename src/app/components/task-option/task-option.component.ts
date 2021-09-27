import { TaskService } from './../../services/task.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';


@Component({
  selector: 'app-task-option',
  templateUrl: './task-option.component.html',
  styleUrls: ['./task-option.component.scss']
})
export class TaskOptionComponent implements OnInit {
  @Output() clearTask = new EventEmitter();
  variableClear :boolean = true
  itemLeft :number;
  filterTodo: string;
  subscriptionItem;
  subscriptionFilter


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.subscriptionItem = this.taskService.getCount().subscribe(
      res => {
        this.itemLeft = res.value;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );

    this.subscriptionFilter = this.taskService.getFilter().subscribe(
      res => {
        this.filterTodo = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }
  filterChange(params){
    this.filterTodo = params;
    this.taskService.setFilter(this.filterTodo);

  }

  onClearTask(variableClear){
    variableClear=!variableClear;
    this.clearTask.emit(variableClear);
  }

  

}
