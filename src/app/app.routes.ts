import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';


export const routes: Routes = [
    {path:'', component:TaskListComponent},
    {path:'details/:id', component:TaskDetailsComponent},
    {path:'add', component:TaskFormComponent},
    {path:'edit/:id', component:TaskFormComponent},
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule{}