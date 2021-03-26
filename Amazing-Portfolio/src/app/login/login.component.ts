import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef=new FormGroup({
    loginuser:new FormControl(),
    loginpass:new FormControl(),
    
  });

  msg:string="";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    console.log(this.loginRef.value);
    let loginuser1 = this.loginRef.get("loginuser")?.value;
    let loginpass1 = this.loginRef.get("loginpass")?.value;

    //console.log("This is login Info",this.loginRef);


   let values = JSON.parse(sessionStorage.getItem("signupInfo")!);
     console.log("Login Succesful");
     this.msg ="Login Succesful!";
    if (loginuser1==values.signupuser && loginpass1==values.signuppass){
      console.log("Login Succesful");
      alert("Login Succesful");
      this.router.navigate(["portfolio"]);
    }
    else 
      this.msg = "Login Failed, Try Again"; 

   }

   signup(){
    this.router.navigate(["signup"]);
   }
}
