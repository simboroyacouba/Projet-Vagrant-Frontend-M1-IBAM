import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../_models/Task';
import { environment } from '../../environments/environment';

const baseUrl = environment.PUBLIC.TASK_API;

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(baseUrl);
  }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${baseUrl}/${id}`);
  }

  create(data: Task): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: Task): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}