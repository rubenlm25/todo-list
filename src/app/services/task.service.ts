import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://todo-json-lomaru.herokuapp.com/tasks'
  constructor(private http:HttpClient) { }

  getTasks() :Observable<Task[]> {
  return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOption);
  }
  addTask(task: Task):Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOption);
  }
//   itemLeft(task: Task){
//     let count = 0;
//     for(let i = 0 ; i<this.getTasks.length;i++){
//       if(task[i].reminder == true){
//         count++;
//       }
//     }
//     return count;
//   }
 }