import { Component } from '@angular/core';
import { Task } from '../_models/Task';
import { Router } from '@angular/router';
import { TaskService } from '../_services/taskService';
import { environment } from '../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { confirmationComponent } from '../confirmation/confirmation.component';

declare interface TableData {
  headerRow: string[];
  libeleRow: string[];
  dataRows: any;
}

declare var $: any;

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  public dtOptions: any = {}

  public tableData1!: TableData;
  success='';
  alert='';
  isLoading = true;
  elements!: Task[];

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];

  constructor(
    private service:TaskService,
    private router: Router,
    public dialog: MatDialog
  ){}
  ngOnInit(){
    this.success='';
    this.alert='';
    this.loadData();  
     
  }
  loadData() {
    this.elements = [
      {
          "id": 1,
          "name": "Task 1",
          "description": "Description of task 1",
          "is_completed": false,
          "date_creation": new Date("2024-07-16T12:34:56Z"),
      },
      {
          "id": 2,
          "name": "Task 2",
          "description": "Description of task 2",
          "is_completed": true,
          "date_creation": new Date("2024-07-15T09:21:45Z"),
      }
  ];
    this.tableData1 = {
      headerRow: [ 'Nom', 'Complète', 'date de création'],
      libeleRow: [ 'name', 'is_completed', 'date_creation'],
      dataRows: this.elements as Task[] 
    };
    $(document).ready(function() {
      $('#example').DataTable();
    });
      this.isLoading= false;
  }
  // loadData() {
  //   this.isLoading = true;
  //   this.success='';
  //   this.alert='';

  //   this.service.getAll().subscribe({
  //     next:(data : Task[])=>{
  //       this.elements = data;
  //       this.tableData1 = {
  //         headerRow: [ 'Nom', 'Complète', 'date de création'],
  //         libeleRow: [ 'name', 'is_completed', 'date_creation'],
  //         dataRows: data as Task[] 
  //       };
  //       $(document).ready(function() {
  //         $('#example').DataTable();
  //       });
  //         this.isLoading= false;
  //     },
  //     error:(error:any)=> {
  //       this.alert = error.error.message;
  //       this.isLoading= false;
  //     }
  //   });
  // }

  ajouter(){
    this.router.navigate([environment.FRONTEND_ROUTES.ADD]);
  }
  view(id:number){
    this.router.navigate([environment.FRONTEND_ROUTES.DETAILS, id]);
  }
  edit(id:number){
    this.router.navigate([environment.FRONTEND_ROUTES.EDIT, id]);
  }
  delete(id:number){
    const dialogRef = this.dialog.open(confirmationComponent, {
      width: '250px',
      data: { message: "Voulez vous supprimer l'élément?" }
    });
    dialogRef.componentInstance.choix.subscribe((result: boolean) => {
      // Ici vous récupérez la valeur true ou false
      if (result) {
        this.success='';
        this.alert='';
            this.isLoading= true;
        this.service.delete(id).subscribe({
          next:(data )=>{
            this.ngOnInit();
            this.success = data.message;
            this.isLoading= false;
          },
          error:(error:any)=> {
            this.alert = error.error.message;
            this.isLoading= false;
          }
        });
      } else {
      }
    });
  
    dialogRef.afterClosed().subscribe(() => {
      // Ce bloc est exécuté après la fermeture du dialogue, mais après avoir déjà reçu l'événement `choix`.
    });
  }
}

