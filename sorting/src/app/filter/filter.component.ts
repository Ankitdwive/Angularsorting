import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(){}
  Employee:any[]=[
{sno:111,
  sphno:"6268783240",
  
  slname:"dwivedi",
  sname:"Ankit",
  add:"hyd"
},
{sno:112,
  sname:"ravi dubey",
sadd:"hyd"
},
{sno:113,
  sname:"Somya",
sadd:"hyd"
},
{sno:114,
  sname:"Aman",
sadd:"hyd"
},
{sno:115,
  sname:"suman",
sadd:"raman"
},
{sno:116,
  sname:"harish",
sadd:"Hyd"
}
]
   
nameSearch:string=""

  ngOnInit(): void {
    console.log(this.Employee);
  }
sub=false;
servers=[''];
OnAddServer() { this.sub=true; 
  this.servers.push('Another Server Added');  
  
  console.log("hello")
}   
id:any;
onRemoveServer() { 

  const position = this.id + 1;  
  this.servers.splice(position, 1);  
}  
}
