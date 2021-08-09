import { TaskService } from './../../services/task.service';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-task-option',
  templateUrl: './task-option.component.html',
  styleUrls: ['./task-option.component.scss']
})
export class TaskOptionComponent implements OnInit {
  @Input() itemLeft = '';
  @Output() filterArg = new EventEmitter();
  filterTodo :string = 'all';

  constructor() { }

  ngOnInit(): void {
  }
  onChangeFilter(params){
    this.filterArg.emit(params);
  }
  filterChange(params){
    this.filterTodo = params;
    this.onChangeFilter(params);
  }

  

}
