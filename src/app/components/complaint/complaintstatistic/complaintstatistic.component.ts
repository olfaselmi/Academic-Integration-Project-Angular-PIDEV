import { Component, OnInit } from '@angular/core';
import {Compalint} from "../../../Model/Compalint";
import {ComplaintService} from "../../../../services/complaint.service";
import {ChartType} from "angular-google-charts";
@Component({
  selector: 'app-complaintstatistic',
  templateUrl: './complaintstatistic.component.html',
  styleUrls: ['./complaintstatistic.component.css']
})
export class ComplaintstatisticComponent implements OnInit {

  //ListComplaint:Compalint[];
  listReclamation:any;
  cloture:number=0;
  noncloture:number=0;
  title = 'Complaints Statistics';
  type = 'PieChart' as ChartType;
  columnNames = ['Closed', 'Being processed'] ;
  options = {   is3D: true};
  dataRec=[] as any;
  width = 0;
  height = 0;



  constructor(private complaintServ: ComplaintService ) { }

  ngOnInit(): void {
    let resp=this.complaintServ.getAllComplaints().subscribe((data)=>
    {this.listReclamation=data

      for( let a of this.listReclamation )
      {if(a.cloture){
        this.cloture+=1;
      }else this.noncloture+=1;

      }

      this.dataRec = [
        ['Closed' , this.cloture],
        ['Being processed', this.noncloture],

      ];
    });

  }

}
