import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  // This is for all component in the app to use this service,
  // if i remove this then i have to add this service in the 
  // providers array of the component where i want to use this service
  // Example: providers: [Todos]
})
export class TodosService {
  http = inject(HttpClient);

  // Hard Coded data, we will replace this with API call in future
  // todoItems: Array<Todo> = [
  //   {
  //     title: 'Learn Angular',
  //     completed: false,
  //     id: 1,
  //     userId: 1
  //   },
  //   {
  //     title: 'Learn React',
  //     completed: false,
  //     id: 2,
  //     userId: 1
  //   },
  // ];

  getTodosFromApi() {
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos');
  }
}
