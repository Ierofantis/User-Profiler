// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

   auth0 = new auth0.WebAuth({
    clientID: '',
    domain: 'ierofantis.eu..com',
    responseType: 'token id_token',
    audience: '',
    redirectUri: 'http://localhost:4200/callback',
    scope: ''
  });
  constructor() {}
  public login(): void {
  	debugger;
    this.auth0.authorize();
  }
}

