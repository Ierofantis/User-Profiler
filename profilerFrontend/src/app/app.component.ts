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

 constructor(public auth: AuthService) {}

  public login(){

  	

  }
}
