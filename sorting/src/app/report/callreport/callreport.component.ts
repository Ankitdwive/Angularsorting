import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpsService } from 'src/app/emps.service';
import { ViewChild } from '@angular/core';
import { cand } from 'src/app/Interf/Cand';
@Component({
  selector: 'app-callreport',
  templateUrl: './callreport.component.html',
  styleUrls: ['./callreport.component.css']
})
export class CallreportComponent {
  displayColumn:string[]=['EmployeeName','Extension','Inbound','Inboundd','Outbound','Outboundt','Total','Totalt']
  datasource:MatTableDataSource<cand>;
//selection = new SelectionModel<stud>(true, []);
show=false;
onClose(){
  this.show=true;
}


  
data:any;
@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort)sort:MatSort;

ngOnInit(): void {
 
  

  this.dataa();
}
constructor(private api:EmpsService){}


da =[
  {name:"Brahma Tejaswini, Andey", id:111, add:"rewa"},{name:"KARTHIK BALASUBRAMANYAM, APPIKONDA", id:111, add:"rewa"},
  {name:"Ankit", id:111, add:"rewa"},{name:"GOWTHAM KUMAR, VEMPADAPU", id:111, add:"rewa"},
  {name:"Carl , Jaubart", id:111, add:"rewa"},{name:"Ankit", id:111, add:"rewa"},
  {name:"Janaki Ramarao, Bethinedi", id:111, add:"rewa"},{name:"Ankit", id:111, add:"rewa"},
  {name:"APEKSHA , HANMATTEKAR",id:222,add:"bhopal"}
  
  ];
dataa(){
  this.api.getdatas().subscribe(res=>{
  this.data=res;
 this.datasource=new MatTableDataSource(this.data);
 this.datasource.paginator=this.paginator;
 this.datasource.sort=this.sort;
  console.log(this.data);
      } )}
      

     
}




