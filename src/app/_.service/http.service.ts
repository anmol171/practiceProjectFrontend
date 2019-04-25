//import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions,} from "@angular/http";
import { Observable, of } from "rxjs";
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
// import { FlushService } from './flush.service';
// import { AppConfig } from '../app.config';
//import { ErrorService } from "./error.service";
import "rxjs/Rx";
// import { } from '@angular/'
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http:Http,
    private router: Router,
  //  private flushService: FlushService,
    //private errorService: ErrorService
)
{ }
post(url, data){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    var querystring = null;
    var index = url.indexOf("?");
    if(index == -1) {
        querystring = url +'?auth_token='+(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).Token: null);
    } else {
        querystring = url +'&auth_token='+(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).Token: null);
    }
    return this.http.post( environment.apiUrl + querystring, data, {withCredentials: true} ).pipe(
      res => {
        return res;
      },
      catchError((error, caught) => {
        //intercept the respons error and displace it to the console
        console.log(error);
        this.handleAuthError(error);
        return of(error);
      }) as any);
    
  

}
/**
   * manage errors
   * @param err
   * @returns {any}
   */
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401) {
      //navigate /delete cookies or whatever
      console.log('handled error ' + err.status);
      this.router.navigate([`/login`]);
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(err.message);
    }
    throw err;
  }
delete(url, data){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    var querystring = null;
    var index = url.indexOf("?");
    if(index == -1) {
        querystring = url +'?auth_token='+(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).Token: null);
    } else {
        querystring = url +'&auth_token='+(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).Token: null);
    }
    return this.http.delete( environment.apiUrl + querystring, {withCredentials: true} )
    .pipe(
      res => {
        return res;
      },
      catchError((error, caught) => {
        //intercept the respons error and displace it to the console
        console.log(error);
        this.handleAuthError(error);
        return of(error);
      }) as any);
}
get(url){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    var querystring = null;
    var index = url.indexOf("?");
    if(index == -1) {
        querystring = url +'?auth_token='+(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).Token: null);
    } else {
        querystring = url +'&auth_token='+(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).Token: null);
    }
    return this.http.get( environment.apiUrl + querystring, {withCredentials: true} )
    // .map(
    //     (response: Response) => {
    //         return response.json();
    //     }
    // ).catch(
    //     (error: Response) => {
    //         const message = error.text();
    //         return Observable.throw(message);
    //     }
    // )
    .pipe(
      res => {
        return res;
      },
      catchError((error, caught) => {
        //intercept the respons error and displace it to the console
        console.log(error);
        this.handleAuthError(error);
        return of(error);
      }) as any);
  }
}
