import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  uri: string = 'http://localhost:8089/SpringMVC/rate/';
  constructor(private http: HttpClient) {}

  getNBLike(id: number): Observable<number> {
    return this.http.get<number>(`${this.uri}nblike/${id}`);
  }
  getLike(idu: number, idp: number): Observable<number> {
    return this.http.get<number>(`${this.uri}/${idu}/like/${idp}`);
  }
  makeLike(idu: number, idp: number): Observable<number> {
    return this.http.post<number>(`${this.uri}/${idu}/like/${idp}`, null);
  }
  removreLike(idu: number, idp: number): Observable<number> {
    return this.http.delete<number>(`${this.uri}${idu}/remove/${idp}`);
  }
}
