import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { GlobalConstantInsurance, GlobalConstants } from '../global-constants'
import { MainService } from '../main.service'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-insurancetype',
  templateUrl: './insurancetype.component.html',
  styleUrls: ['./insurancetype.component.css']
})
export class InsurancetypeComponent implements OnInit {

  pick_insurance_type = GlobalConstantInsurance.PICK_INSURANCE_TYPE
  at_least_one_insurance_is_required = GlobalConstantInsurance.AT_LEAST_ONE_INSURANCE_IS_REQUIRED
  submit = GlobalConstants.SUBMIT
  ageCheck: number
  conditionCheck: number
  emailCheck: string
  nameCheck: string

  url = 'http://604c607fd3e3e10017d518a0.mockapi.io/RegisteredInsurance'

  selection = new FormControl('');
  selected: any
  insuranceList: any
  pickOne: boolean = false

  constructor(public mainService: MainService, private http: HttpClient, private route: Router) {

  }

  ngOnInit() {
    this.ageCheck = this.mainService.loggedInUser.age
    this.conditionCheck = this.mainService.loggedInUser.condition
    this.emailCheck = this.mainService.loggedInUser.email
    this.nameCheck = this.mainService.loggedInUser.name
    this.insuranceList = [this.ageCheck >= 50 || this.conditionCheck > 2 ? 'Not Applicable' : 'Disability income insurance', this.ageCheck >= 70 ? 'Not Applicable' : 'Life Insurance', this.ageCheck >= 50 ? 'Not Applicable' : 'Health Insurance', this.ageCheck >= 70 ? 'Not Applicable' : 'Critical illness insurance'];
    this.selection.setValue('')
  }

  checkInsurance(data) {
    this.selected = data.value
  }

  submitInsurance() {
    if (this.selected == undefined) {
      this.pickOne = true
      setTimeout(() => {
        this.pickOne = false
      }, 4000);
      return
    }
    this.http.post(this.url, {
      name: this.nameCheck,
      age: this.ageCheck,
      condition: this.conditionCheck,
      email: this.emailCheck,
      registeredInsurance: this.selected
    }).toPromise().then((data: any) => {
      this.mainService.applied = true
      this.route.navigate(['/login'])
    })
  }

}
