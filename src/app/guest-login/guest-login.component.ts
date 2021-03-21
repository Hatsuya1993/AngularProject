import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GlobalConstantsGuest, GlobalConstants, GlobalConstantsRegister } from '../global-constants';
import { MainService } from '../main.service'
import { Router } from '@angular/router'
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

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
  health = GlobalConstantsRegister.HEALTH

  please_include_all_details = GlobalConstantsRegister.PLEASE_INCLUDE_ALL_DETAILS
  please_provide_a_valid_email = GlobalConstantsRegister.PLEASE_PROVIDE_A_VALID_EMAIL
  numbers_only_not_exceeding_3 = GlobalConstantsRegister.NUMBERS_ONLY_NOT_EXCEEDING_3

  inputEmail = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  inputName = new FormControl('', Validators.required)
  inputAge = new FormControl('', Validators.required)
  healthCondition = new FormControl('', Validators.required)
  timer: boolean = false;

  submitDetails() {
    if (this.inputEmail.value === '' || this.inputName.value === '' || this.inputAge.value === '') {
      this.inputAge.setValue('')
      this.inputEmail.setValue('')
      this.inputName.setValue('')
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
      age: parseInt(this.inputAge.value),
      healthCondition: this.task.subtasks
    })
    this.route.navigate([`/user/${this.inputName.value}`])
  }

  constructor(public mainService: MainService, private route: Router) { }

  ngOnInit(): void {
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
