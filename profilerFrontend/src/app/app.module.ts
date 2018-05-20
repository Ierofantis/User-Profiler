import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

//import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    HttpModule,
    HttpClientModule


  ],
   providers: [AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
