import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/Model/quiz';
import { QuizService } from 'src/services/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  show:true;

  listQuiz:Quiz[];
  quiz:Quiz;
  showAdd = false; 
   searchVal="";
   constructor( private ac:ActivatedRoute,private quizserv:QuizService) { }
   
  ngOnInit(): void {
  
    this.quizserv.getAllQuizFromServer().subscribe(res=>{
      this.listQuiz=res;
      
    console.log(this.listQuiz)
    
  });
  

  }
  
  deletequiz(id:number){
    this.quizserv.deleteQuizById(id).subscribe(()=>this.quizserv.getAllQuizFromServer()
    .subscribe(res=>{this.listQuiz=res})
    );
  }

  editquiz(x:Quiz){
    this.show=true;
    this.quiz=x;
    
  }
  
  editMyQuiz(i :any){

  }
  

  showForm(){
    this.showAdd=true;
  }
  addquiz(i:Quiz){
    this.listQuiz.push(i);
      }

}