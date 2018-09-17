import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  

  constructor(private router: Router) {}
  isLoggedIn:boolean = false;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.isLoggedIn){
        return this.isLoggedIn;
      }
      else{
        this.router.navigate(['/login']);
      }
    return this.isLoggedIn;
  }

  LoggedIn(): void{
    this.isLoggedIn = true;
  }

  LoggedOut():void{
    this.isLoggedIn=false;
  }
}
