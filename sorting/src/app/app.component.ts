import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SendmsgComponent } from './msg/sendmsg/sendmsg.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { HistorymComponent } from './msg/sendmsg/historym/historym.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title="hello";
  url="assets/ankit.jpg";
  image(e:any){
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  name:string='Ankit Dwivedi';
  password:string='123456';
show:boolean;
sh=true;

  submitted:false;
  frmm!:FormGroup;
  constructor(private fb:FormBuilder,private route:Router,private dialog:MatDialog){}
  ngOnInit(): void {
    this.frmm=this.fb.group({
      name:['',Validators.required],
  password:['',Validators.required]
    });this.show=false;
  }
get f(){
  return this.frmm.controls;
}
    Login(){
     //this.submitted=true;

      this.name='Ankit Dwivedi';
      this.password='123456';
        const user=
           this.name == this.frmm.value.name && this.password==this.frmm.value.password

        
        if(user){
          alert("Owner login sucessfully");
          this.show=false;
          this.sh=true;
         // this.route.navigate(['app'])
          this.frmm.reset();
         
        }else{
          alert("user not found");
        }
       } 
       public sendmsg() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = "450px";
        dialogConfig.width = "1200px";
        dialogConfig.panelClass = "customMatStyle";
        this.dialog.open(SendmsgComponent, dialogConfig);
      }
      smshistory(){

        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = "450px";
        dialogConfig.width = "1200px";
        dialogConfig.panelClass = "customMatStyle";
        this.dialog.open(HistorymComponent, dialogConfig);
      }
      }





