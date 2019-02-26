import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {AboutComponent} from './about/about.component';
import {LoggingComponent} from './logging/logging.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'task', component: LoggingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'logging', component: LoggingComponent },
  { path: 'task-detail/:id', component: TaskDetailComponent },
  { path: 'home', redirectTo: '/' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
