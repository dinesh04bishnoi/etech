import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormGroupName} from '@angular/forms';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  
  constructor() { }
  employeeForm:any;
  ngOnInit() {
    this.employeeForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age : new FormControl(),
      phone : new FormControl(),
      address : new FormControl(),
      skills : new FormControl()
    });
  }
  onSubmit(): void{
   console.log(this.employeeForm.value);
  }

}
