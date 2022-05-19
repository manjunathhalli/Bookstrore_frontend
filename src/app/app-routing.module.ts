import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
  
  { path:'signUp',component:SignUpComponent},

  {path:'login', component:LoginComponent},

  {path:'forgot',component:ForgotpasswordComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
