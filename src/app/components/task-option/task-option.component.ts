import { TaskService } from './../../services/task.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-option',
  templateUrl: './task-option.component.html',
  styleUrls: ['./task-option.component.scss']
})
export class TaskOptionComponent implements OnInit {
  
  onTest(){
    let count = document.querySelectorAll(".reminder.task-text").length;
    return count;
    
  }
  
  
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void { 
  }
}
