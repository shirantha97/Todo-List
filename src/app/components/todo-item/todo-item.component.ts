import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../models/todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() t : Todo;

  constructor() { }

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
  }

  onDelete(){

  }


}
