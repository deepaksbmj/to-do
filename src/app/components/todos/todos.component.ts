import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  inputTodo :any;
  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

  toggleDone(index: any)
  {
    this.todos.map((v,i)=>{
      if( i == index)
        v.completed = !v.completed
      return v;
    })
  }

  deleteTodo(index:any)
  {
    this.todos = this.todos.filter((v,i)=> i != index);
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed:false
    });
    this.inputTodo = "";
  }

}
