import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  route: Router

  loggedInUser: { name, age, email, condition }

  applied: boolean
  successRegister: boolean

  login(user: { name, password, age, email, condition }) {
    this.loggedInUser = {
      name: user.name,
      age: user.age,
      email: user.email,
      condition: user.condition
    }
  }


}
