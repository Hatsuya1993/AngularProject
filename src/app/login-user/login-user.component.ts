import { Component, OnInit } from '@angular/core';
import { GlobalConstants, GlobalConstantsLogin, GlobalConstantsRegister, GlobalConstantInsurance } from '../global-constants'
import { FormControl } from '@angular/forms'
import { MainService } from '../main.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  url = 'https://604c607fd3e3e10017d518a0.mockapi.io/Users'

  name = GlobalConstants.NAME
  address = GlobalConstants.ADDRESS
  password = GlobalConstants.PASSWORD
  submit = GlobalConstants.SUBMIT
  login_as_guest = GlobalConstantsLogin.LOGIN_AS_GUEST
  please_include_all_details = GlobalConstantsRegister.PLEASE_INCLUDE_ALL_DETAILS
  error_login_info = GlobalConstantsLogin.ERROR_LOGIN_INFO
  successfully_applied = GlobalConstantInsurance.SUCCESSFULLY_APPLIED_LOGIN_TO_VIEW
  successfully_register = GlobalConstantsRegister.SUCCESSFULLY_REGISTER

  inputName = new FormControl('')
  inputPassword = new FormControl('')

  registeredPeople = new MainService()

  results: boolean = false
  error: boolean = false
  errorLogin: boolean = false
  applied: boolean = false
  successRegister: boolean = false

  submitDetails() {
    if (this.inputName.value && this.inputPassword.value) {
      this.http.get(this.url + `?password=${this.inputPassword.value}`).toPromise().then((data) => {
        if (data == false) {
          this.errorLogin = true
          this.inputName.setValue('')
          this.inputPassword.setValue('')
          setTimeout(() => {
            this.errorLogin = false
          }, 4000);
          return
        }
        // this.results = !this.results
        this.mainService.login(data[0])
        this.route.navigate([`/user/${data[0].name}`])
        return
      })
      return
    }
    this.error = true
    this.inputName.setValue('')
    this.inputPassword.setValue('')
    setTimeout(() => {
      this.error = false
    }, 4000);
  }

  constructor(public mainService: MainService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.applied = this.mainService.applied
    this.successRegister = this.mainService.successRegister
    setTimeout(() => {
      this.applied = false
      this.mainService.applied = false
      this.successRegister = false
      this.mainService.successRegister = false
    }, 4000);
  }

}
