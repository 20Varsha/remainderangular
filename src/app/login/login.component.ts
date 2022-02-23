import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "what's new event"


loginForm=this.fb.group({

  userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

})


  constructor(private routerLogin: Router, private ds: DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // userChange(event:any){
  //   this.userid=event.target.value
  //   console.log(this.userid)

  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd)

  // }

  login() {

    var userid = this.loginForm.value.userid

    var pswd = this.loginForm.value.pswd

if(this.loginForm.valid){
    let result = this.ds.login(userid, pswd)
    if ( result) {
      
      alert("login successfull")
      this.routerLogin.navigateByUrl('dashboard')

    }

}
  
 else{
   alert("Invalid form")
 }

  }

}



