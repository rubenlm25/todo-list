import { Task } from '../../Task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToogleReminder: EventEmitter<Task> = new EventEmitter();
  constructor() { }
  status:string = 'disable'
  ngOnInit(): void {
  }
  onDelete(task){
    this.onDeleteTask.emit(task);
      
  }
  onToogle(task){
    this.onToogleReminder.emit(task);
  }
  onMode(){
    let body=document.getElementById("bcg");
    let mode = body.className;
    return mode;
  }
}
