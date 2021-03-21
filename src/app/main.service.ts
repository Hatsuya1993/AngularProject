import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  route: Router

  loggedInUser: { name, age, password, email, healthCondition }
  loginStatus: { name, status }

  applied: boolean
  successRegister: boolean

  login(user: { name, password, age, email, healthCondition }) {
    this.loggedInUser = {
      name: user.name,
      age: user.age,
      password: user.password,
      email: user.email,
      healthCondition: user.healthCondition
    }
  }

  loginAuth(user: { name, status }) {
    this.loginStatus = {
      name: user.name,
      status: user.status
    }
  }


}
