import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse,HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(public http: HttpClient) {
      console.log('Hello LocaisServiceProvider Provider');
  }
  //localhost - dev
  //private apiUrl='http://localhost:62391/token';

  //producao
  private apiUrl='https://bo.evolutionleap.eu/token';

  handleError(error: Response | any) {
    // Do whatever you like with the error (send it to the server?)
    // And log it to the console
    console.error('It happens: ', error);
 }

  loginToken(username,password): Observable<any>{
    const body = new HttpParams()
    .set("grant_type","password")
    .set('username', username)
    .set('password', password);
    return this.http.post(this.apiUrl,body.toString(),httpOptions);
  
  }

  
  /*isLoggedIn():Observable<any>{

  }*/
  /*
  load(): Observable<any>{
    // don't have the data yet
    return this.http.get<any>(this.apiUrl + 'Locais/GetAllLocais')   
    //.map((res => res.json())
    //return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    //this.http.get('http://localhost:64070/api/Locais/GetAllLocais')
    //});
  }*/
}
