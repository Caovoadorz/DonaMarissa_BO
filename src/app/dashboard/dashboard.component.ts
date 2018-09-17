import { Component, OnInit } from '@angular/core';

import {LoginModel} from '../Models/loginModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'DonaMarissaBO';
  loginModel:LoginModel;
  
  constructor() { }

  ngOnInit() {
  }

}
