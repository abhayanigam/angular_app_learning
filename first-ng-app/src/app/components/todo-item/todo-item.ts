import { UpperCasePipe } from '@angular/common';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
import { Todo } from './../../model/todo.type';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo, UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo = input.required<Todo>();
  todoToggle = output<Todo>();

  todoClicked() {
    this.todoToggle.emit({
      ...this.todo(),
      completed: !this.todo().completed,
    });
  }
}

/*
  Note : 
  Angular pipes:
    Angular pipes are used to transform data right in the templates 
*/