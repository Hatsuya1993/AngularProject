import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component'
import { HttpClientModule } from '@angular/common/http';
import { InsurancetypeComponent } from './insurancetype/insurancetype.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from '@angular/material/select';
import { GuestLoginComponent } from './guest-login/guest-login.component'
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    NavBarComponent,
    RegisterUserComponent,
    UserComponent,
    InsurancetypeComponent,
    GuestLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
