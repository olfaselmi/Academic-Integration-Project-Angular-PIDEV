import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";


import {newTrustedFunctionForJIT} from "@angular/compiler/src/output/output_jit_trusted_types";
import {Compalint} from "../../../Model/Compalint";
import {SessionService} from "../../../../services/session.service";
@Component({
  selector: 'app-form-reclamation',
  templateUrl: './form-reclamation.component.html',
  styleUrls: ['./form-reclamation.component.css']
})
export class FormReclamationComponent implements OnInit {
  FormRec: FormGroup;
  Rec: Compalint;
  userFile:any;
  public imagePath:any;
  imgURL:any;
  InputImage:string  ="";
  InputImageext:string;
  @Output() addEvent=new EventEmitter< Compalint>();
  @Input() updateReclamation: Compalint;
  constructor(private session:SessionService) { }

  ngOnInit(): void {
    if(this.updateReclamation== null){
      this.FormRec= new FormGroup({
        'idReclamation': new FormControl('', ),
        'objet': new FormControl('', [Validators.required]),
        'messageReclamation': new FormControl('',[Validators.required] ),
        'imageReclamation': new FormControl('', ),
      })}
    else{

      this.FormRec= new FormGroup({
        'idReclamation': new FormControl(this.updateReclamation.idComplaint, ),
        'objet': new FormControl(this.updateReclamation.topic, [Validators.required]),
        'messageReclamation': new FormControl(this.updateReclamation.messageComplaint, [Validators.required]),
        'imageReclamation': new FormControl(this.updateReclamation.imageComplaint, ),
      })
    }
  }

  uploadFiles( event:any ) {
    if(event.target.files.length>0)
    {
      const file=event.target.files[0];
      this.InputImage=Math.random().toString(36).substr(2, 9)+"."+event.target.files[0].name.split('.')[1];
      //this.InputImageext=files.target.files[0].name.split('.')[1];
      this.userFile=file;
      var reader = new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(_event) =>{this.imgURL=reader.result}
    }
  }

  /* downloadimage()
   {
     // how to use FileSaver here ?

      FileSaver.saveAs(this.file, this.InputImage);
     }*/
  saveRec(form:FormGroup){

    if(this.InputImage!=""){
      const formdata=new FormData();
      formdata.append('file',this.userFile,this.InputImage);
     // this.serviceimage.postFileRec(formdata).subscribe();
    }
    this.Rec=new  Compalint(form.value.idReclamation,form.value.objet,form.value.messageReclamation,
      this.InputImage,new Date(Date.now()),this.session.getUser(),false);
    this.addEvent.emit(this.Rec)
  }
}
