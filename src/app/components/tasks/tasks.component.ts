import { element } from 'protractor';
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
  filter: string = 'all';
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks);
  }
  deleteTask(task: Task){
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasksFiltered = this.tasksFiltered.filter((t) => t.id !== task.id))
    );
  }
  toogleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
    setTimeout(()=>{this.onTest(this.filter);
    },50)    
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasksFiltered.push(task)));
    
  }

  onCount(tasks: Task[]){
    let count;
    let taskFiltered;
    if(this.filter=='completed'){
      taskFiltered = this.tasks.filter(tasks =>tasks.reminder == false);
    }
    else{
      taskFiltered= tasks.filter(tasks =>tasks.reminder == false);
    }
    count = taskFiltered.length;
    this.itemLeft= count;
    return count;
  }
  onTest(params){
    console.log('passer ici');
    
    switch(params){
      case 'all':
        this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks);
        break;
      case 'active' :
        this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks.filter(task => task.reminder == false));
        break;
      case 'completed' :
        this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks.filter(task => task.reminder == true));
        this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
        break;
      default:
        this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks);
    }
    this.filter=params;
  }
  onClear(params){
    this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks);
    // console.log(this.tasks);
    let testo = this.tasksFiltered.length;

    
    // let taille = cleartask.length
    // console.log(taille);
    
    for(let i = 0;i<testo;i++){
      if(this.tasksFiltered[i].reminder == true){
        this.taskService
        .deleteTask(this.tasksFiltered[i])
        .subscribe(
          () => (this.tasksFiltered = this.tasksFiltered.filter((t) => t.id !== this.tasksFiltered[i].id))
        );
      }
    }

        

    this.onTest(this.filter);
    console.log('done');
    
  }
}
