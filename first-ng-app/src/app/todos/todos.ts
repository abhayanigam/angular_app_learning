import { TodoItem } from './../components/todo-item/todo-item';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError, throwError } from 'rxjs';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})

// OnInterface is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
// Basically this allows me to have a function which run when the component is initialized, 
// and this is a good place to fetch data from the server or do any other initialization tasks.
export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit() {
    // console.log(this.todoService.todoItems);
    // this.todoItems.set(this.todoService.todoItems);
    // // Here we taking the information from the service and setting it to the signal.

    this.todoService.getTodosFromApi().pipe(
      catchError((error) => {
        console.error('Error fetching todos:', error);
        throw error;
      })
    ).subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((items) => {
      return items.map((item) => {
        if (item.id === todoItem.id) {
          return todoItem;
        }
        return item;
      });
    });
  }
}
