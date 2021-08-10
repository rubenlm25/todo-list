import { TaskService } from './../../services/task.service';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-task-option',
  templateUrl: './task-option.component.html',
  styleUrls: ['./task-option.component.scss']
})
export class TaskOptionComponent implements OnInit {
  @Input() itemLeft = '';
  @Output() filterArg = new EventEmitter();
  @Output() clearTask = new EventEmitter();
  filterTodo :string = 'all';
  variableClear :boolean = true

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  onChangeFilter(params){
    this.filterArg.emit(params);
  }
  filterChange(params){
    this.filterTodo = params;
    this.onChangeFilter(params);
  }

  onClearTask(variableClear){
    variableClear=!variableClear;
    this.clearTask.emit(variableClear);
  }

  

}
