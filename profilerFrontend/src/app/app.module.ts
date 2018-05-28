import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { DealService } from './deal.service';
//import { ROUTES } from './app.routes';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }/*,
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }*/
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  [RouterModule.forRoot(routes)],
    BrowserModule,
    HttpModule,
    HttpClientModule,
   RouterModule
  ],
   providers: [AuthService, DealService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
