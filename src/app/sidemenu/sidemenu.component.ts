import { Component, OnInit } from '@angular/core';
import { LoginguardGuard } from '../_guard/loginguard.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private loginGuard:LoginguardGuard,private route:Router) { }

  ngOnInit() {
  }

  logout():void{
    sessionStorage.removeItem('currentUser');
    this.loginGuard.LoggedOut();
    this.route.navigate(['/login']);
  }
  menu : any =  [
    {name:'Dashboard', path:'/dashboard'},
    {name:'Gestão', path:'/gestao'},
    {name:'Atendimento', path:'/atendimento'},
    {name:'Compras',path:'/compras'},
    {name:'Definições',path:'/Definições'}
  ]

}
