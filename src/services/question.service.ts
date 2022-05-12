import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profil } from 'src/app/Model/profil';
import { Question } from 'src/app/Model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  listQuestions : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }
  constructor(private myHttp : HttpClient) { }


  readonly BaseURI = 'http://localhost:8089/SpringMVC';

  getAllQuestionFromServer() {
     
    return this.myHttp.get('http://localhost:8089/SpringMVC/question/get-all');
  }

  deleteQuestionById(qusetionId:number){
    return this.myHttp.delete("http://localhost:8089/SpringMVC/question/delete/" +qusetionId  );
    }

    

    addQuestion(q: any ,question:Question):Observable<Question>{
    return this.myHttp.post<Question>("http://localhost:8089/SpringMVC/question/add/",Question,this.httpOptions);
     }

     

       updateProfil (id: number, Question: Question): Observable<Question> {
        return this.myHttp.put<Question>("http://localhost:8089/SpringMVC/question/update/"+ id, Question,
        this.httpOptions);
        }

}
