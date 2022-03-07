import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';



@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PageResetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
