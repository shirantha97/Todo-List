import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/todo';
import {Observable} from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todoUrl: string =  'https://jsonplaceholder.typicode.com/todos/';
  todoLimit: string = '?_limit=5';


  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoUrl.concat(this.todoLimit));
  }

  OntoggleComplete(todo: Todo): Observable<any>{
    let url: string = this.todoUrl.concat(todo.id.toString())
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo): Observable<Todo>{
    let url: string = this.todoUrl.concat(todo.id.toString())
    return this.http.delete<Todo>(url, httpOptions);
  }
}
