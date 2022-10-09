import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList:Employee[] = [{
    id:1,
    name:"John",
    lastName:"Wick",
    age: 25,
    rating: 4.4
  },
  {
    id:1,
    name:"Mick",
    lastName:"Luis",
    age: 44,
    rating: 2.5
  }


]


  getEmployee(){
    return this.employeeList
  }

  constructor() { }
}
