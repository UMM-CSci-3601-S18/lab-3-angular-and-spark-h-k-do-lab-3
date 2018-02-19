import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {Todo} from './todo';
import {environment} from '../../environments/environment';

@Injectable()
export class TodoListService {
  readonly todoUrl: string = environment.API_URL + 'todos';
  trueTodoUrl: string = this.todoUrl + '?status=complete';
  falseTodoUrl: string = this.todoUrl + '?status=incomplete';

  constructor(private httpClient: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
      return this.httpClient.get<Todo[]>(this.todoUrl);
  }

  getTodoById(id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(this.todoUrl + '/' + id);
  }
}
