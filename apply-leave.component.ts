import { Component, OnInit } from '@angular/core';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-apply-leave',
  templateUrl: `./apply-leave.component.html`,
  styleUrls: ['./apply-leave.component.css'],
 
})
export class ApplyLeaveComponent implements OnInit {

  info:any[]=[
    {
      "EmployeeID":"Employee Id       POI3241",
      "EmployeeName":"EmployeeName    XYZ",
      "Designation":"Designation      Trainee"
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  
    navigateTo(value) {
      if (value) {
        this.router.navigate([value]);

      }
      


  }
}
