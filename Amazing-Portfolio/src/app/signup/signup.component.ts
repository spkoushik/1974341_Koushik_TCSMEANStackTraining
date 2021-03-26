import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { log } from 'node:console';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpRef=new FormGroup({
    signupuser:new FormControl(),
    signuppass:new FormControl(),
    fname:new FormControl(),
    lname:new FormControl()
    
  });
  msg:string="";

  constructor(public router:Router) { }
 
  ngOnInit(): void {
  }

  checkUser(){
    console.log(this.signUpRef.value);
    let signupuser = this.signUpRef.get("signupuser")?.value;
    let signuppass = this.signUpRef.get("signuppass")?.value;
    
    console.log("The sign-up info is ",this.signUpRef);

    const user = {
      signupuser:signupuser,
      signuppass:signuppass
    }

    sessionStorage.setItem("signupInfo", JSON.stringify(user));
    console.log(user);
    alert("Signup Succesful");
    this.router.navigate(["login"]);
        
   }
   login(){
     this.router.navigate(["login"]);
   }

}
