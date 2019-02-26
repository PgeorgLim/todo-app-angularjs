import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../task';
import { TaskService }  from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  task: Task = new Task();

  constructor(  
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location) { }

  ngOnInit() {
    this.getTaskDetails();
  }

  getTaskDetails() : void{
     const taskID = +this.route.snapshot.paramMap.get('id');
     this.taskService.getTaskDetail(taskID)
        .subscribe(task => this.task = task);
  }

  save() : void {
      this.location.back();
  }

}
