import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../models/todo'
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() t : Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      todo: true,
      isComplete: this.t.completed
    }
    return classes;
  }

  onToggle(){
    this.t.completed = !this.t.completed;
    this.todoService.OntoggleComplete(this.t).subscribe(todo =>{
      console.log(todo)
    })

  }


  onDelete(todo){
   this.deleteTodo.emit(todo)
  }


}
