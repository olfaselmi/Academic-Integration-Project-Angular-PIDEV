import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReponseReclamation} from "../../../Model/ReponseReclamation";
import {SessionService} from "../../../../services/session.service";
import {Compalint} from "../../../Model/Compalint";
import {ComplaintService} from "../../../../services/complaint.service";
import {User} from "../../../Model/User";
import {ReponseReclamationService} from "../../../../services/reponse-reclamation.service";
import {ActivatedRoute} from "@angular/router";
import Swal from "sweetalert2"



class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-form-reponsereclamation',
  templateUrl: './form-reponsereclamation.component.html',
  styleUrls: ['./form-reponsereclamation.component.css']
})
export class FormReponsereclamationComponent implements OnInit {
  FormRepRec: FormGroup;
  RepRec:ReponseReclamation;
  userFile:any;
  public imagePath:any;
  imgURL:any;
  params : any;
  InputImage:string  ="";
  InputImageext:string;
  @Output() addEvent=new EventEmitter<ReponseReclamation>();
  @Input() updateRepRec:ReponseReclamation;
  @Input() rec:Compalint;
  @Input() idUser : any ;
  @Input() idComplaint : any;


  constructor(private route: ActivatedRoute ,private session:SessionService,private serviceRec:ComplaintService , private serviceRes : ReponseReclamationService) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.params = params;
      })
    if(this.updateRepRec== null){
      this.FormRepRec= new FormGroup({
        'idReponseReclamation': new FormControl('', ),
        'reponse': new FormControl('', [Validators.required]),
        'imageReponseReclamation': new FormControl('', ),
      })}
    else{

      this.FormRepRec= new FormGroup({
        'idReponseReclamation': new FormControl(this.updateRepRec.IdReponseComplaint, ),
        'reponse': new FormControl(this.updateRepRec.Response, [Validators.required]),
        'imageReponseReclamation': new FormControl(this.updateRepRec.ImageReponseComplaint, ),
      })
    }
  }

  uploadFiles( event:any ) {
    if(event.target.files.length>0)
    {
      const file=event.target.files[0];
      this.InputImage=Math.random().toString(36).substr(2, 9)+"."+event.target.files[0].name.split('.')[1];
      // this.InputImageext=files.target.files[0].name.split('.')[1];
      this.userFile=file;
      var reader = new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(_event) =>{this.imgURL=reader.result}
    }
  }

  saveRepRec(form:FormGroup){
    this.serviceRes.ajouterReponseReclamation(form.value.reponse , this.params?.id , this.params.idUser ).subscribe(() => {
      console.log('success')
    /*  Swal.fire({
        position : 'center',
        title : 'Added succefully',
        showConfirmButton : false,
        timer : 1500,
      })
    } , err => {
      console.log(err)
      Swal.fire({
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })*/
    })

  }




}
