import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllBookComponent } from './Components/get-all-book/get-all-book.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    GetAllBookComponent,
    QuickviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
