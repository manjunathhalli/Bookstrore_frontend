import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllBookComponent } from './Components/get-all-book/get-all-book.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { GetcartComponent } from './Components/getcart/getcart.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { OrderplacedComponent } from './Components/orderplaced/orderplaced.component';

const routes: Routes = [
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotpasswordComponent },
  // { path: 'getallbook', component: GetAllBookComponent },
  // {path:'dashboard',component:DashboardComponent}
  // { path: 'getcart', component: GetcartComponent },
  { path: 'orderplaced', component:OrderplacedComponent},
  {
    path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard/getallbook', pathMatch: 'full', },
      { path: 'getallbook', component: GetAllBookComponent },
      { path: 'quickview/:bookId', component: QuickviewComponent },
      { path: 'getcart', component: GetcartComponent },
      { path: 'orderplaced', component:OrderplacedComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
