import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../_services/taskService';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../_models/Task';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit {
  success='';
  alert='';
  idDataToUpdate!:number;
  isLoading = true;
  submitted = false;
  titre='Créer une nouvelle tache';
  form!: FormGroup;
  
  constructor(
    private service: TaskService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],  // Initialiser avec une chaîne vide ou une valeur par défaut
      description: [''],
      is_completed: [false]  // Initialiser à false par défaut
    });
    if(this.route.snapshot.paramMap.get('id')){
      this.idDataToUpdate = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.getDetail(this.idDataToUpdate);
    }

    this.form = this.fb.group({
      name: new FormControl<string | null>(null, [Validators.required]),   
      description: new FormControl<string | null>(null, [Validators.required]),  
      is_completed: new FormControl<boolean | null>(null),  
    });
    this.isLoading=false;
  }

  onSubmitForm(){
    this.success='';
    this.alert='';
    this.submitted = true;
    if(this.form.invalid){
      return
    }
    else{
      let dataInForm = new Task(
        undefined,
        this.form.get('name')!.value,
        this.form.get('is_completed')!.value!,
        this.form.get('description')!.value!,
        null,
        null)

      if(this.idDataToUpdate != undefined){
        dataInForm.id = this.idDataToUpdate;
        this.update(dataInForm);
      }
      else{
        this.add(dataInForm);
      }
    }
    
  }

  add(element: Task){
    this.isLoading = true;
    this.service.create(element).subscribe({
      next:(data)  =>{
        this.isLoading = false;
        this.success = data.message;
        this.form = new FormGroup({
          name: new FormControl<string | null>(''),
          description: new FormControl<string | null>(''),
          is_completed: new FormControl<boolean | null>(false),
        });
      },
      error: (error: any) => {
        this.isLoading = false;
        this.alert = error.error.message;
      }
    })
  }
  update(element: Task){
    this.isLoading = true;
    this.service.update(element.id, element).subscribe({
      next:(data)  =>{
        this.isLoading = false;
        this.success = data.message;
        this.router.navigate([environment.FRONTEND_ROUTES.LIST]);
      },
      error: (error: any) => {
        this.isLoading = false;
        this.alert = error.error.message;
      }
    })
  }

  // getDetail(id: number){
  //   this.isLoading = true;
    
  //   this.form.patchValue({
  //     name: "Task 2",
  //     description: "Description of task 2",
  //     is_completed: true,
  //   });
  //       this.isLoading = false;
      
  // }
  getDetail(id: number){
    this.isLoading = true;
    this.service.getById(id).subscribe({
      next:(data)  =>{
        this.titre = 'Modifier "'+data.name+'"';
        
        this.form.patchValue(data);
        this.isLoading = false;
      },
      error: (error: any) => {
      }
    });
  }


}