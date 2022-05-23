import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {

      let reqdata = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.userService.loginUser(reqdata).subscribe((response: any) => {
        console.log(response);
        //  console.log("Login successful", response);
        localStorage.setItem("BookStore", response.access_token);
        this.router.navigateByUrl('/dashboard')
      },
        (error: any) => {
          console.log(error)
        })
    }
  }

}
