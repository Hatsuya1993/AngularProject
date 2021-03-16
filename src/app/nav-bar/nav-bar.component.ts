import { Component, OnInit } from '@angular/core';
import { GlobalConstantsNavBar } from '../global-constants'
import { GlobalConstants } from '../global-constants'
import { MainService } from '../main.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  fakeatinsurance = GlobalConstantsNavBar.FAKEATINSURANCE
  home = GlobalConstants.HOME
  register = GlobalConstants.REGISTER
  login = GlobalConstants.LOGIN
  user = GlobalConstants.USER

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }

}
