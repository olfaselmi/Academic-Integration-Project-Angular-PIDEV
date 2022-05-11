import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './../app/Model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  uri: string = 'http://localhost:8089/SpringMVC/post';
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.uri);
  }
  addPost(id: number, body: String): Observable<Post[]> {
    return this.http.post<Post[]>(`${this.uri}/${id}`, { contents: body });
  }
  updatePost(post: Post): Observable<Post[]> {
    return this.http.put<Post[]>(this.uri, post);
  }
  deletePost(id: number): Observable<any> {
    console.log(this.uri);
    return this.http.delete(`${this.uri}/${id}`);
  }
}
