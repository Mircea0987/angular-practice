import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeTableComponent implements OnInit {

  @Input() employee:Employee[] = []

  @Output() employeeDetails = new EventEmitter<any>()

  hidden: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  toggle(){
    this.hidden = !this.hidden
  }

  employeeDetail(employee:any){
    this.employeeDetails.emit(employee)
  }

}
