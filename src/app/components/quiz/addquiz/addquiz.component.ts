import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Quiz } from "src/app/Model/quiz";
import { QuizService } from "src/services/quiz.service";


@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit {

  myForm: FormGroup;
  @Output() aded = new EventEmitter<Quiz>();
  quiz: Quiz;

  constructor(private quizserv: QuizService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      IdQuiz: new FormControl(),
      codeReponse: new FormControl(),

    })
  }

  add() {
    this.quizserv.addQuiz(this.myForm.value).subscribe();
    this.aded.emit(this.myForm.value);
    this.myForm.reset();
    window.location.reload();
  }

}

