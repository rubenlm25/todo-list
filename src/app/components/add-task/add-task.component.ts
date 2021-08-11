import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string;
  reminder: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newTask={
      text: this.text,
      reminder:this.reminder
    };

    // @todo -emit event
    this.onAddTask.emit(newTask);

    this.text='';
    this.reminder= false
  }
}
