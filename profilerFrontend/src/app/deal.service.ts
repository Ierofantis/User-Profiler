
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { Deal } from './deal';

@Injectable()
export class DealService {
  // Define the routes we are going to interact with
  private publicDealsUrl = 'http://localhost:3000/api/deals/public';
  private privateDealsUrl = 'http://localhost:3000/api/deals/private';

  constructor(
    public http: HttpClient,
    public authService: AuthService
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

  public get authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }
 // Implement a method to get the private deals
  getPrivateDeals() {  

     this.http.get(this.privateDealsUrl, {
    
        headers: new HttpHeaders().set('Authorization',  `Bearer ${localStorage.getItem('access_token')}` )
      }).subscribe((res: Response) => {
       console.log(res);
       console.log('getPrivate');
    });
  }   


   // Implement a method to handle errors if any
// Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    // return throwError(err.message || err);
  }
}
