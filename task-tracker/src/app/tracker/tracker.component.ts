import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';
import { TrackerDetails } from '../trackerdetails';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  trackerdetails: Array<TrackerDetails> = new Array();

  constructor(public task:TrackerService) { }

  ngOnInit(): void {
  }

  taskInfo(taskRef:any)
    {

      console.log(taskRef);
      this.task.storeTasks(taskRef);

      
      //console.log(this.trackerRef.value);
      console.log(this.task.storeTasks(taskRef)); // all value
       /*
      let empid = this.trackerRef.get("empid")?.value; // get specific control value
      let empname = this.trackerRef.get("empname")?.value;
      let task = this.trackerRef.get("task")?.value; // get specific control value
      let deadline = this.trackerRef.get("deadline")?.value;
      console.log(this.trackerRef);
      //console.log(phoneno);
      console.log("Your Contact Details are Saved Succesfully..!!");
      //this.msg = "Contact Details are successfully saved !";
      let taskdetails = new TrackerDetails(empid, empname, task, deadline);
      this.trackerdetails.push(taskdetails);
      
      */
    }
}

    