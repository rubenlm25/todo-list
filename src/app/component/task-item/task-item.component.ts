import { Task } from './../../Task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task
  constructor() { }
  status:string = 'disable'
  ngOnInit(): void {
  }

}
