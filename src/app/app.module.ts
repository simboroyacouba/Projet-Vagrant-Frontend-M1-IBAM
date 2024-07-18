import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { CommonModule, NgFor } from '@angular/common'; 
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingComponent } from './loading/loading.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({ declarations: [
        AppComponent,
        TaskListComponent,
        LoadingComponent,
        TaskDetailsComponent,
        TaskFormComponent,
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatSelectModule,
        MatIconModule,
        MatDialogModule,  
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        BrowserModule,
        RouterModule.forRoot(routes) 
    ], 
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi())
    ],
 })
export class AppModule { }
