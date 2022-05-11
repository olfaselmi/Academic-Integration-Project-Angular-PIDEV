import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './Model/Comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  uri: string = 'http://localhost:8089/SpringMVC/comment/';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getNB(id: number): Observable<number> {
    return this.http.get<number>(`${this.uri}nbComment/${id}`);
  }
  getByPost(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.uri}post/${id}`);
  }
  addComment(c: String, idu: number, idp: number): Observable<Comment> {
    console.log(`${this.uri}${idu}/add/${idp}`);
    return this.http.post<Comment>(
      `${this.uri}${idu}/add/${idp}`,
      { contents: c },
      this.httpOptions
    );
  }
}
