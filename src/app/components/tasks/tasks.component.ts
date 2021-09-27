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
  subscriptionCount;
  currentCount :number;
  currentFilter :string
  subscriptionFilter;
  subscriptionFilterFonction;
  observer;
  

  
    constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    this.taskService.getTasks().subscribe((tasks) => this.tasksFiltered = tasks);
    setTimeout(()=>{this.startCount(this.tasks);
    },1000); 
    this.subscriptionCount = this.taskService.getCount().subscribe(
      res => {
        this.currentCount = res.value;
        console.log('changement de valeur');
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
    this.subscriptionFilter = this.taskService.getFilter().subscribe(
      res => {
        this.currentFilter = res; 
        this.onTest(this.currentFilter);   
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }
  increment(): void {
    this.taskService.setCount(this.currentCount, 1);
  }

  decrement(): void {
    this.taskService.setCount(this.currentCount, -1);
  }
  deleteTask(task: Task){
    if(task.reminder == false){
      this.decrement()
    }
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasksFiltered = this.tasksFiltered.filter((t) => t.id !== task.id))
    );
  }
  toogleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
    if(task.reminder == true){
      this.decrement()
    }
    else{
      this.increment()
    }
    setTimeout(()=>{this.onTest(this.filter);
    },50)    
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasksFiltered.push(task)));
    if(task.reminder == false){
      this.increment()
    }
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
  startCount(tasks: Task[]){
    let count;
    let taskFiltered;
    taskFiltered = this.tasks.filter(tasks =>tasks.reminder == false);
    count = taskFiltered.length;
    this.taskService.startCount(count);
    console.log(count);
    
}
}
