import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Quiz } from 'src/app/Model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  listQuiz : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }
  constructor(private myHttp : HttpClient) { }
  readonly BaseURI = 'http://localhost:8089/SpringMVC';

 
  getAllQuizFromServer(): Observable<Quiz[]> {
     
    return this.myHttp.get<Quiz[]>('http://localhost:8089/SpringMVC/quiz//get-all');
  }

  deleteQuizById(id:number){
    return this.myHttp.delete("http://localhost:8089/SpringMVC/quiz/delete/{id}"+id);
    }

    

    addQuiz(Quiz:Quiz):Observable<Quiz>{
    return this.myHttp.post<Quiz>("http://localhost:8089/SpringMVC/quiz/add/",Quiz,this.httpOptions);
     }

     

       
}
