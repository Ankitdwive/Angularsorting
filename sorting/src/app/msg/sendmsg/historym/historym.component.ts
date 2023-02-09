import { Component ,OnInit } from '@angular/core';
import { EmpsService } from 'src/app/emps.service';

@Component({
  selector: 'app-historym',
  templateUrl: './historym.component.html',
  styleUrls: ['./historym.component.css']
})
export class HistorymComponent implements OnInit {

  ngOnInit(): void {
    this.showdata();
  }
  constructor(private api:EmpsService){

  }
  dataa:any;
showdata(){
  this.api.history().subscribe(res=>{
  this.dataa=res;
  console.log(this.dataa);
})
}

}
