import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userid=""
  pswd=""
  date=""
  newevents=""
 
  user=this.ds.currentUser

  constructor( private ds: DataService) { }

  ngOnInit(): void {
  }
event(){

  var userid=this.userid

  var pswd=this.pswd

  var date=this.date

  var newevents=this.newevents

let result=this.ds.event(userid,pswd,date,newevents)

if(result){

  alert(newevents+"Event Successfully Added")

}

else{

  alert("Event Not Added")

}
  
}

}
