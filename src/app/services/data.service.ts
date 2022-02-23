import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""

  data: any = {

    200: { userid: 200, uname: "squid", password: "p1",dates:[],events:[]},
    201: { userid: 201, uname: "alen", password: "p2",dates:[],events:[]},
    202: { userid: 202, uname: "elizabeth", password: "p3",dates:[],events:[]}
  }

  constructor() { }
  

  register(userid: any, uname: any, password: any) {

    let database = this.data
 

    if (userid in database) {
      return false
    }
    else {
      database[userid] = {
        userid,
        uname,
        password,
      }
   
      return true
    }

  
}

login(userid:any,pswd:any){

let database=this.data

if(userid in database){
  if(pswd==database[userid]["password"]){
    this.currentUser=database[userid]["uname"]
return true

  }

else{

  alert("Failed")
  return false
}
}
else{
  alert("account not found")
  return false
}
}

event(userid:any , password: any,date:any,newevents:any){

  let database=this.data

  if(userid in database){
  if(password==database[userid]["password"]){

    database[userid]["dates"]+=date

    database[userid]["events"]+=newevents
    return database[userid]["events"]
  }
else{
  alert("Failed to Add")
  return false
}

  }
  else{
alert("Form failed")
return false
  }

}

}