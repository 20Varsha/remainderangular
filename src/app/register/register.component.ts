import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    uname: ['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  

  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {

    var uname = this.registerForm.value.uname

    var userid = this.registerForm.value.userid

    var pswd = this.registerForm.value.pswd

    console.log(this.registerForm);

    if (this.registerForm.valid) {
      var result = this.ds.register(userid, uname, pswd)

      if (result) {
        alert("registration successfull")
        this.router.navigateByUrl('')
      }
      else {
        alert("Account Already exist")
        this.router.navigateByUrl('')

      }
    }
    else {
      alert("Form Invalid")
    }

  }
}

