import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { // 3rd execute

  //propertis
  aim="your perfect banking partner";
  accounts="enter your acno here";

  acno="";
  pswd="";
  //user defind functions//4th execute
 acnoChange(event:any){
  this.acno=event.target.value;
  console.log(this.acno);

  
 }
 pswdChange(event:any){
  this.pswd=event.target.value;
  console.log(this.pswd);
 }
  login(){
   // alert('login clicked');
   var acno=this.acno;
   var pswd=this.pswd;
   var userDetails=this.userDetails;
   if (acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert("login successfull");

    }
    else{
      alert("invalid password");

    }

   }else{
    alert("invalid user details")
   }




  }

  userDetails:any={
    1000:{acno:1000,username:'jees',password:1000,balance:1000},
    1001:{acno:1000,username:'amal',password:1002,balance:1000},
    1002:{acno:1000,username:'sarath',password:1003,balance:1000}
  }

  constructor() { }//1st execute
  //spl member funtion , automatically involks when an obj created 

  ngOnInit(): void { //2 nd execute - life cycle hooks of angular -
    //iniitial process of component initialization
  }

}
