import { Component, OnInit } from '@angular/core';
import { GlobalConstants, GlobalConstantsRegister } from '../global-constants'
import { FormControl, Validators } from '@angular/forms'
import { MainService } from '../main.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  mainServiceData
  timer
  url = 'https://604c607fd3e3e10017d518a0.mockapi.io/Users'


  email = GlobalConstants.EMAIL
  password = GlobalConstants.PASSWORD
  register = GlobalConstants.REGISTER
  address = GlobalConstants.ADDRESS
  name = GlobalConstants.NAME
  age = GlobalConstants.AGE
  condition = GlobalConstants.CONDITION
  please_include_all_details = GlobalConstantsRegister.PLEASE_INCLUDE_ALL_DETAILS
  please_provide_a_valid_email = GlobalConstantsRegister.PLEASE_PROVIDE_A_VALID_EMAIL
  password_requirement = GlobalConstantsRegister.PASSWORD_REQUIREMENT

  successRegister: boolean = false

  inputEmail = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  inputPassword = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  inputName = new FormControl('')
  inputCondition = new FormControl('')
  inputAge = new FormControl('')

  constructor(public mainService: MainService, private http: HttpClient, private route: Router) {
    this.mainServiceData = mainService
  }

  ngOnInit(): void {
    this.successRegister = false
  }

  submitDetails() {
    if (this.inputEmail.value === '' || this.inputName.value === '' || this.inputCondition.value === '' || this.inputAge.value === '' || this.inputPassword.value === '') {
      this.inputAge.setValue('')
      this.inputEmail.setValue('')
      this.inputName.setValue('')
      this.inputCondition.setValue('')
      this.inputPassword.setValue('')
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
      condition: this.inputCondition.value
    }).toPromise().then((data: any) => {
      this.successRegister = true
      this.mainService.successRegister = this.successRegister
      this.route.navigate(['/login'])
    })
  }

}
