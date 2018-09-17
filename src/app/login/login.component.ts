import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {LoginAuthService} from '../services/login-auth.service';

import {LoginModel} from '../Models/loginModel';
import {LoginguardGuard} from '../_guard/loginguard.guard';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  username: string;
  password: string;
  UserNameFormControl= new FormControl('',[
    Validators.required
  ]);

  PasswordFormControl= new FormControl('',[
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(private loginAuth:LoginAuthService,private loginGuard:LoginguardGuard,public loginModel:LoginModel,private route:Router) { }

  ngOnInit() {
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(currentUser && (currentUser.token != null)) {
      this.loginGuard.LoggedIn();
      this.route.navigate(['/dashboard']);
  }
}

  login():void {
    if(this.username != null && this.password != null && this.PasswordFormControl.valid && this.UserNameFormControl.valid)
    {
      this.loginAuth.loginToken(this.username,this.password).subscribe(res => {
        this.loginModel.setLoginModel(res);
        sessionStorage.setItem('currentUser', JSON.stringify({ token: this.loginModel.token, username: this.loginModel.username}));

        this.loginGuard.LoggedIn();
        
        var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        console.log(res);
        console.log(currentUser);

        this.route.navigate(['/dashboard']);
        
      });
      console.log(this.username);
      console.log(this.password);
    }
    else{
      this.matcher;
      console.log("UserName ou Password Invalidos");
    }
  }

}
