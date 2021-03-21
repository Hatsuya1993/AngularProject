import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service'
import { GlobalConstants, GlobalConstantsLogin, GlobalConstantsLoginAuth } from '../global-constants'
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { GlobalConstantInsurance, GlobalConstantsUsers } from '../global-constants'

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
  health = GlobalConstants.HEALTH
  you_are_entitled_for_these_insurances_based_on_your_profile = GlobalConstantsUsers.YOU_ARE_ENTITLED_FOR_THESE_INSURANCES_BASED_ON_YOUR_PROFILE

  url = GlobalConstantInsurance.URL
  urlAuth = GlobalConstantsLoginAuth.URL
  urlUser = GlobalConstantsLogin.URL

  checkName: string
  checkAge: number
  checkHealth: any
  registeredInsurance: any
  showInsurance: boolean = false
  logoutButton: boolean = true

  selected: any

  constructor(public mainService: MainService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    this.http.get(this.urlAuth + `?name=${this.route.snapshot.paramMap.get('name')}`).toPromise().then(el => {
      if (el != false) {
        this.http.get(this.urlUser + `?name=${el[0].name}`).toPromise().then(el => {
          this.selected = el[0]
          this.checkName = el[0].name
          this.checkAge = el[0].age
          this.checkHealth = el[0].healthCondition;
          this.http.get(this.url + `?name=${el[0].name}&age=${this.checkAge}`).toPromise().then(data => {
            this.registeredInsurance = data[0].registeredInsurance
            if (this.registeredInsurance.length > 0) { this.showInsurance = true }
          })
          this.mainService.login({ name: el[0].name, password: el[0].password, age: el[0].age, email: el[0].email, healthCondition: el[0].healthCondition })
          this.router.navigate([`/user/${el[0].name}`])
          return
        })
      }
      else if (this.mainService.loggedInUser.password === '') {
        this.logoutButton = false
        this.selected = { name: this.mainService.loggedInUser.name, age: this.mainService.loggedInUser.age, email: this.mainService.loggedInUser.email }
        this.checkHealth = this.mainService.loggedInUser.healthCondition.filter(el => el.completed === true)
        this.selected.age = this.mainService.loggedInUser.age
        this.router.navigate([`/user/${this.mainService.loggedInUser.name}`])
      }
      else {
        this.router.navigate(['/login'])
        return
      }
    }).catch((er) => {
      console.log(er)
      this.router.navigate(['/login'])
      return
    })
  }

  logOutAccount() {
    this.http.get(this.urlAuth + `?name=${this.checkName}`).toPromise().then((data) => {
      for (const i of Object.entries(data)) {
        let idDelete = parseInt(i[0])
        this.http.delete(this.urlAuth + `/${idDelete + 1}`).toPromise().then(data => {
          this.router.navigate(['/login'])
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
