import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

interface Count {
  value: number;
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://todoapiruben.herokuapp.com/tasks';
  private initialCount: Count = {value:0};
  private countTracker = new BehaviorSubject<Count>(this.initialCount);

  private initialFilter: string = 'all'
  private filterTracker= new BehaviorSubject<string>(this.initialFilter);
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

  getCount(): Observable<Count>{
    return this.countTracker.asObservable();
  }
  setCount(val: number, delta: number): void {
    this.countTracker.next({value: (val + delta)});
  }

  startCount(val: number){
    this.countTracker.next({value: val});
  }

  getFilter(): Observable<string>{
    return this.filterTracker.asObservable();
  }

  setFilter(option: string){
    this.filterTracker.next(option);
  }
}