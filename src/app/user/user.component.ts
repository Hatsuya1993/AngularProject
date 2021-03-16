import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service'
import { GlobalConstants } from '../global-constants'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { GlobalConstantInsurance } from '../global-constants'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hello = GlobalConstants.HELLO
  email = GlobalConstants.EMAIL
  age = GlobalConstants.AGE
  condition = GlobalConstants.CONDITION
  logout = GlobalConstants.LOGOUT
  insurance = GlobalConstantInsurance.INSURANCE

  url = 'http://604c607fd3e3e10017d518a0.mockapi.io/RegisteredInsurance'

  checkName: string
  checkAge: number
  registeredInsurance: any
  showInsurance: boolean = false

  selected: any

  constructor(public mainService: MainService, private router: Router, private http: HttpClient) {
    if (!mainService.loggedInUser) {
      this.router.navigate(['/login'])
      return
    }
    this.selected = mainService.loggedInUser
    this.checkName = mainService.loggedInUser.name
    this.checkAge = mainService.loggedInUser.age
    this.http.get(this.url + `?name=${this.checkName}&age=${this.checkAge}`).toPromise().then((data: any) => {
      this.registeredInsurance = data[0].registeredInsurance
      if (this.registeredInsurance.length > 0) { this.showInsurance = true }
    })
  }

  ngOnInit(): void {
  }

}
