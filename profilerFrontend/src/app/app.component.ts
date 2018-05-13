import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 constructor(public auth: AuthService) {
  
  }
books:any;
  public login(){

  	this.auth.login().subscribe(data => {
    this.books = data;
    console.log(this.books);
  }, err => {
    if(err.status === 401) {
      console.log('error')
    }
  });
  }
}
