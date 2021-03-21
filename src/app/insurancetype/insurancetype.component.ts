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
  emailCheck: string
  nameCheck: string
  healthCheck: any
  url = GlobalConstantInsurance.URL

  selection = new FormControl('');
  selected: any
  insuranceList: any
  pickOne: boolean = false

  constructor(public mainService: MainService, private http: HttpClient, private route: Router) {

  }

  ngOnInit() {
    this.ageCheck = this.mainService.loggedInUser.age
    this.emailCheck = this.mainService.loggedInUser.email
    this.nameCheck = this.mainService.loggedInUser.name
    this.healthCheck = this.mainService.loggedInUser.healthCondition.filter((el) => el.completed === true)
    this.insuranceList = [this.ageCheck > 75 || this.healthCheck.find(el => el.name === 'Recurred Heart Attack') ? 'Not Applicable' : 'Mental Health (Period up to 100 years) (Age < 75)', this.ageCheck >= 70 ? 'Not Applicable' : 'Life Insurance (Period up to 100 years)', (this.ageCheck <= 15 || this.ageCheck >= 75) || this.healthCheck.find(el => el.name === 'HIV/AIDS') ? 'Not Applicable' : 'HIV/AIDS Insurance (Period up to 80 years) (Age 15 -> 65)', ((this.ageCheck >= 65 || this.ageCheck <= 30) || this.healthCheck.find(el => el.name === 'Diabetes')) ? 'Not Applicable' : 'Diabetes Care (Period up to 80 years) (Age 30 -> 65)'];
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
      email: this.emailCheck,
      registeredInsurance: this.selected
    }).toPromise().then((data: any) => {
      this.mainService.applied = true
      this.route.navigate(['/login'])
    })
  }

}
