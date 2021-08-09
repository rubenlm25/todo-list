import { TaskService } from '../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  tasksFiltered: Task[] = [];
  itemLeft: number;
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks);
  }
  deleteTask(task: Task){
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }
  toogleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();

    
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
    
  }

  onCount(tasks: Task[]){
    let taskFiltered= tasks.filter(tasks =>tasks.reminder == false);
    let count = taskFiltered.length;
    this.itemLeft= count;
    return count;
  }
  onTest(params){
    switch(params){
      case 'all':
        this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks);
        break;
      case 'active' :
        this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks.filter(task => task.reminder == false));
        break;
      case 'completed' :
        this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks.filter(task => task.reminder == true));
        break;
      default:
        this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks);
    }
  }
}
