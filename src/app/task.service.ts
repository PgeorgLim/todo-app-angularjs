import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks : Task[] = [];
  pendingTasks : Task[] = [];
  completedTasks : Task[] = [];

  constructor() { }

  addNewTask(taskname: string){
     this.tasks.push({
        id: this.tasks.length + 1,  //auto increment
        name : taskname,
        desc : '',
        done : false
     });

  }

  getTaskDetail(id: number) : Observable<Task>{
      return of(this.tasks.find(t => t.id === id)); 
  }

  getPendingTasks(): Observable<Task[]> {   
    this.pendingTasks = [];
    this.tasks.forEach( el => {
       if (el.done === false)
        this.pendingTasks.push(el);
    });
    return of(this.pendingTasks);
  }

  getCompletedTasks(): Observable<Task[]> {   
    this.completedTasks = [];
    this.tasks.forEach( el => {
       if (el.done === true)
       this.completedTasks.push(el);
    });
    return of(this.completedTasks);
  }

  completeTask(id: number){
    this.pendingTasks.find(t => t.id === id).done = true;
  }

  editTask(id: number){

  }

  deleteTask(id: number){
    // Find the index position of that certain task, then remove it from that position
    this.tasks.splice( this.tasks.indexOf(
      this.tasks.find(t => t.id === id)
    ), 1 );

  }

}
