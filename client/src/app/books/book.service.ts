import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Player, PlayerId } from './player';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Array<Player>> {
    return this.http.get<Array<Player>>(`${environment.api}/books`);
  }

  findById(id: number): Observable<Player> {
    console.log("findById", id);
    return this.http.get<Player>(`${environment.api}/findbook?bookId=${id}`);
  }

  create(book: Omit<Player, PlayerId>): Observable<Player> {
    return this.http.post<Player>(`${environment.api}/books`, book);
  }

  update(book: Player): Observable<Player> {
    return this.http.put<Player>(`${environment.api}/updatebook/`,book);
  }

  partialUpdate(_id: number, book: Partial<Player>): Observable<Player> {
    const { id, ...fieldsToUpdate } = book;
    return this.http.patch<Player>(`${environment.api}/books/${_id}`, fieldsToUpdate);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.api}/books/${id}`);
  }
}
