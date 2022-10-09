import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employee:Employee[] = []

  constructor(private employees:EmployeeService) { }

  ngOnInit(): void {

    this.employee = this.employees.getEmployee()
  }

  employeeDetail(employee:any){
    console.log(employee)
  }
  

}
