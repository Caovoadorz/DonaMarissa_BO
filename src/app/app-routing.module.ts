import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {DashboardComponent} from './dashboard/dashboard.component';
import {GestaoComponent} from './gestao/gestao.component';
import {LoginguardGuard } from './_guard/loginguard.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
{ path: 'dashboard', component: DashboardComponent , canActivate:[LoginguardGuard]},
  { path: 'gestao', component:GestaoComponent , canActivate:[LoginguardGuard]}
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule { }
