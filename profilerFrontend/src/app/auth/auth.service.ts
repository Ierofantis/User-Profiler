// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
(window as any).global = window;
@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
    clientID: '',
    domain: 'name.com',
    responseType: 'token id_token',
    audience: 'domain/api/v2/',
    redirectUri: 'http://localhost:4200',
    scope: 'openid'
  });

   // Store authentication data
  userProfile: any;
  accessToken: string;
  authenticated: boolean;
  constructor(private router: Router, private http: HttpClient) {

//Check session to restore login if not expired

  }
  public login():void{
    this.auth0.authorize();

  }
  loadToken() {
    console.log(localStorage.getItem)
    console.log(this.auth0.accessToken);    //undefined here
    this.auth0.accessToken = localStorage.getItem('token');
    console.log(this.auth0.accessToken)     // correct token here
  }
   public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log(authResult.accessToken)
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }


}

