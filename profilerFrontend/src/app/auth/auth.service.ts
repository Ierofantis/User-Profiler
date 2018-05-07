// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '',
    domain: '',
    responseType: '',
    audience: '',
    redirectUri: 'http://localhost:3000/callback',
    scope: ''
  });

  constructor() {}

  public login(): void {
    this.auth0.authorize();
  }
}

