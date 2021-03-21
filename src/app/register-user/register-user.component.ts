import { Component, OnInit } from '@angular/core';
import { GlobalConstants, GlobalConstantsLogin, GlobalConstantsRegister } from '../global-constants'
import { FormControl, Validators } from '@angular/forms'
import { MainService } from '../main.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  mainServiceData
  timer
  url = GlobalConstantsLogin.URL


  email = GlobalConstants.EMAIL
  password = GlobalConstants.PASSWORD
  register = GlobalConstants.REGISTER
  address = GlobalConstants.ADDRESS
  name = GlobalConstants.NAME
  age = GlobalConstants.AGE
  condition = GlobalConstants.CONDITION
  health = GlobalConstantsRegister.HEALTH
  please_include_all_details = GlobalConstantsRegister.PLEASE_INCLUDE_ALL_DETAILS
  please_provide_a_valid_email = GlobalConstantsRegister.PLEASE_PROVIDE_A_VALID_EMAIL
  password_requirement = GlobalConstantsRegister.PASSWORD_REQUIREMENT
  numbers_only_not_exceeding_3 = GlobalConstantsRegister.NUMBERS_ONLY_NOT_EXCEEDING_3

  successRegister: boolean = false

  inputEmail = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  inputPassword = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  inputName = new FormControl('')
  inputAge = new FormControl('')
  healthCondition = new FormControl('', Validators.required)

  constructor(public mainService: MainService, private http: HttpClient, private route: Router) {
    this.mainServiceData = mainService
  }

  ngOnInit(): void {
    this.successRegister = false
  }

  submitDetails() {
    if (this.inputEmail.value === '' || this.inputName.value === '' || this.inputAge.value === '' || this.inputPassword.value === '') {
      this.inputAge.setValue('')
      this.inputEmail.setValue('')
      this.inputName.setValue('')
      this.inputPassword.setValue('')
      this.healthCondition.setValue('')
      this.timer = true
      setTimeout(() => {
        this.timer = false
      }, 4000);
      return
    }
    this.http.post(this.url, {
      id: 1,
      email: this.inputEmail.value,
      name: this.inputName.value,
      password: this.inputPassword.value,
      age: parseInt(this.inputAge.value),
      healthCondition: this.task.subtasks
    }).toPromise().then((data: any) => {
      this.successRegister = true
      this.mainService.successRegister = this.successRegister
      this.route.navigate(['/login'])
    })
  }

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Diabetes', completed: false, color: 'primary' },
      { name: 'High-Blood Pressure', completed: false, color: 'primary' },
      { name: 'Recurred Stroke', completed: false, color: 'primary' },
      { name: 'Overweight', completed: false, color: 'primary' },
      { name: 'HIV/AIDS', completed: false, color: 'primary' },
      { name: 'Smoker', completed: false, color: 'primary' },
      { name: 'Recurred Heart Attack', completed: false, color: 'primary' },
      { name: 'None', completed: false, color: 'primary' },
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

}
