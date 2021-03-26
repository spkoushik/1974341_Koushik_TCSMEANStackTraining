import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { userInfo } from 'node:os';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioRef=new FormGroup({
    contactname:new FormControl(),
    phoneno:new FormControl()
  });
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.portfolioRef.value)

    let contactname = this.portfolioRef.get("contactname")?.value;
    let phoneno = this.portfolioRef.get("phoneno")?.value;

    console.log("Portfolio info is ",this.portfolioRef);
    
    const userInfo = {
      contactname:contactname,
      phoneno:phoneno
    }
    
  sessionStorage.setItem("PortfolioInfo", JSON.stringify(userInfo));
  console.log(userInfo);
  alert("Data Saved");
  } 

}
