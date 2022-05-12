import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/Model/quiz';
import { QuizService } from 'src/services/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  show: true;

  listQuiz: Quiz[];
  quiz: Quiz;
  showAdd = false;
  searchVal = "";
  displayModal: boolean;
  quizByOrderList: any;

  myForm: FormGroup
  myGetQuizzOrderForm: FormGroup

  constructor(private ac: ActivatedRoute, private quizserv: QuizService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      IdQuiz: new FormControl(0),
      codeReponse: new FormControl(),
    })

    this.myGetQuizzOrderForm = new FormGroup({
      idqe: new FormControl(),
      idq: new FormControl(),
    })



    this.quizserv.getAllQuizFromServer().subscribe(res => {
      this.listQuiz = res;

      console.log(this.listQuiz)

    });
    this.getAllQuizzByOrder()

  }

  add() {
    this.quizserv.addQuiz(this.myForm.value).subscribe((res) => {
      console.log('this is the response', res)
    }, err => {
      console.log(err)
    })
  }

  deletequiz(id: number) {
    this.quizserv.deleteQuizById(id).subscribe(() => this.quizserv.getAllQuizFromServer()
      .subscribe(res => { this.listQuiz = res })
    );
  }

  editquiz(x: Quiz) {
    this.show = true;
    this.quiz = x;

  }

  editMyQuiz(i: any) {

  }


  showForm() {
    this.showAdd = true;
  }
  addquiz(i: Quiz) {
    this.listQuiz.push(i);
  }


  showModalDialog() {
    this.displayModal = true;
  }

  getAllQuizzByOrder() {
    console.log(this.myGetQuizzOrderForm.value)
    this.quizserv.getAllQuizzByOrder(parseInt(this.myGetQuizzOrderForm.get('idq').value), parseInt(this.myGetQuizzOrderForm.get('idqe').value)).subscribe(res => {
      console.log('this is the response', res)
      this.quizByOrderList = res
    }, err => {
      console.log(err)
    })
  }

}