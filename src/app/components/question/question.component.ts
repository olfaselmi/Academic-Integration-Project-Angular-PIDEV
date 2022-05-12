import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Profil } from 'src/app/Model/profil';
import { Question } from 'src/app/Model/question';
import { QuestionService } from 'src/services/question.service';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  show: true;

  ListQuestions: any;
  question: Question;
  showAdd = false;
  searchVal = "";
  myForm: FormGroup
  result: any
  /* all: any = []; */

  constructor(private ac: ActivatedRoute, private questionserv: QuestionService, private quizServ: QuizService) { }



  ngOnInit(): void {

    this.questionserv.getAllQuestionFromServer().subscribe(res => {
      this.ListQuestions = res
    });


    this.myForm = new FormGroup({
      answer: new FormControl(),
      idp: new FormControl(),
      idq: new FormControl(),
    })

  }

  deletequestion(qusetionId: number) {
    // this.questionserv.deleteQuestionById(qusetionId).subscribe(()=>this.questionserv.getAllQuestionFromServer()
    //   .subscribe(res=>{this.ListQuestions=res})
    // );
  }

  editquestion(x: Question) {
    this.show = true;
    this.question = x;

  }

  editMyQuestion(i: any) {

  }


  showForm() {
    this.showAdd = true;
  }
  addquestion(id: any, i: Question) {
    // this.questionserv.addQuestion(id,i).subscribe(()=>this.questionserv.getAllQuestionFromServer().subscribe(res=>{this.ListQuestions=res}));
  }

  answer() {
    console.log('this is the response', this.myForm.value)
    this.quizServ.answerQuizz(parseInt(this.myForm.get('answer').value), parseInt(this.myForm.get('idp').value), parseInt(this.myForm.get('idq').value)).subscribe(
      res => {
        console.log('this is the response', res)
        this.result = res
      }
    )

  }

}
