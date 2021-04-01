import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(public http:HttpClient) { }

  storeTasks(tasks:any)
  {
    this.http.post("http://localhost:3000/emplist",tasks).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}

/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { TrackerDetails } from './trackerdetails';


@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(public http:HttpClient) { }

  storeTasks(tasks:any)
  {
    this.http.post("http://localhost:3000/tasklist",tasks).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  
}*/