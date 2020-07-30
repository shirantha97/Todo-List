import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todo =>{
      this.todos = todo;
    });
  }

  deleteTodo(todo: Todo){
    this.todos = this.todos.filter(t => {
      t.id !== todo.id
    });
    console.log(this.todos)
    this.todoService.deleteTodo(todo).subscribe();
  }

}
