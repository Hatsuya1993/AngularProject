import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GlobalConstantsGuest, GlobalConstants, GlobalConstantsRegister } from '../global-constants';
import { MainService } from '../main.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-guest-login',
  templateUrl: './guest-login.component.html',
  styleUrls: ['./guest-login.component.css']
})
export class GuestLoginComponent implements OnInit {

  key_guest_details = GlobalConstantsGuest.KEY_GUEST_DETAILS
  continue = GlobalConstants.CONTINUE
  name = GlobalConstants.NAME
  age = GlobalConstants.AGE
  email = GlobalConstants.EMAIL
  condition = GlobalConstants.CONDITION
  address = GlobalConstants.ADDRESS
  please_include_all_details = GlobalConstantsRegister.PLEASE_INCLUDE_ALL_DETAILS
  please_provide_a_valid_email = GlobalConstantsRegister.PLEASE_PROVIDE_A_VALID_EMAIL

  inputEmail = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  inputName = new FormControl('', Validators.required)
  inputCondition = new FormControl('', Validators.required)
  inputAge = new FormControl('', Validators.required)
  timer: boolean = false;

  submitDetails() {
    if (this.inputEmail.value === '' || this.inputName.value === '' || this.inputCondition.value === '' || this.inputAge.value === '') {
      this.inputAge.setValue('')
      this.inputEmail.setValue('')
      this.inputName.setValue('')
      this.inputCondition.setValue('')
      this.timer = true
      setTimeout(() => {
        this.timer = false
      }, 4000);
      return
    }
    this.mainService.login({
      name: this.inputName.value,
      password: '',
      email: this.inputEmail.value,
      condition: this.inputCondition.value,
      age: this.inputAge.value
    })
    this.route.navigate([`/user/${this.inputName.value}`])
  }

  constructor(public mainService: MainService, private route: Router) { }

  ngOnInit(): void {
  }

}
