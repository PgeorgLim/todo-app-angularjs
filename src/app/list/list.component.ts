import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { LoginService } from '../login.service';

import { faEdit, faTrash , faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {
  
  faEdit = faEdit;
  faTrash = faTrash;
  faCheck = faCheck;
  
  pendingTasks : Task[];
  completedTasks : Task[];
  taskForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder,
              private taskService: TaskService,
              public loginService : LoginService) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      taskname: ['', Validators.required]
    });

    this.getPending();
    this.getCompleted();
  }

  getPending(){
    this.taskService.getPendingTasks()
      .subscribe(pendingTasks => this.pendingTasks = pendingTasks);
  }

  getCompleted(){
    this.taskService.getCompletedTasks()
      .subscribe(completedTasks => this.completedTasks = completedTasks); 
  }

  completedTask(id: number){
    this.taskService.completeTask(id);
    this.getPending();
    this.getCompleted();
  }

  // editTask(id: number){
  //   this.taskService.editTask(id);
  //   this.getPending();
  //   this.getCompleted();
  // }
  
  deleteTask(id: number){
    this.taskService.deleteTask(id);
    this.getPending();
    this.getCompleted();
  }  

  onSubmit() {
      this.submitted = true;

      if (this.taskForm.invalid) {
          this.success = false;
          return;
      }
      else{
        this.success = true;
        //adding the task by calling the relevant fn in task service
        this.taskService.addNewTask(this.taskForm.controls.taskname.value);
        this.getPending();
      }  
  }

}
