
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable()
export class DealService {
  // Define the routes we are going to interact with
  private publicDealsUrl = 'http://localhost:3000/api/deals/public';
  private privateDealsUrl = 'http://localhost:3000/api/deals/private';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // Implement a method to get the public deals
  getPublicDeals() {   
    this.http.get(this.publicDealsUrl).
    subscribe((res: Response) => {
       console.log(res);
    });
  }
  getAuthDeals(){
     this.http.get(this.privateDealsUrl).
    subscribe((res: Response) => {
       console.log(res);
    });
  }


 // Implement a method to get the private deals
  getPrivateDeals() {  
 console.log('getPrivateBefore');
     this.http.get(this.privateDealsUrl, {

        headers: new HttpHeaders().set('Authorization', 'Bearer ${this.authService.accessToken}')
      }).subscribe((res: Response) => {
       console.log(res);
       console.log('getPrivate');
    });
  }   
}
