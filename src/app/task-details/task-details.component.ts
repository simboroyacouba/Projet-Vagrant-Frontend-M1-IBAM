import { Component, OnInit } from '@angular/core';
import { Task } from '../_models/Task';
import { TaskService } from '../_services/taskService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent  implements OnInit {
  success='';
  alert='';
  element!:Task;
  isLoading = true;
  idDataToUpdate!:number;
  example:Task ={
    "id": 2,
    "name": "Task 2",
    "description": "Description of task 2",
    "is_completed": true,
    "date_creation": new Date("2024-07-15T09:21:45Z"),
  }
  
  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.idDataToUpdate = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.getDetail(this.idDataToUpdate);
    }
  }

  getDetail(id: number){
    this.isLoading = true;
    
        this.element = this.example;
        this.isLoading = false;
      
  }
 
  // getDetail(id: number){
  //   this.isLoading = true;
  //   this.service.getById(id).subscribe({
  //     next:(data)  =>{
        
  //       this.element = data;
  //       this.isLoading = false;
  //     },
  //     error: (error: any) => {
  //     }
  //   });
  // }


}