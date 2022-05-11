import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchingService {

  constructor(private myHttp: HttpClient) { }


  getMatch(idu: number, idt: number) {
    return this.myHttp.get(`http://localhost:8089/SpringMVC/matching/add/${idu}/${idt}`)
  }

  match(idu: number, idt: number) {
    return this.myHttp.get(`http://localhost:8089/SpringMVC/matching/Match/${idu}/${idt}`)
  }

  getTripsWithDate(idu: number) {
    return this.myHttp.get(`http://localhost:8089/SpringMVC/matching/tri/${idu}`)
  }
}
