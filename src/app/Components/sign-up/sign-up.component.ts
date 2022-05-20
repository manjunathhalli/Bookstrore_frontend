import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userServices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm!: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      role: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_no: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    });
  }
  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {

      let reqdata = {
        role: this.signupForm.value.role,
        first_name: this.signupForm.value.first_name,
        last_name: this.signupForm.value.last_name,
        phone_no: this.signupForm.value.phone_no,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        confirm_password: this.signupForm.value.confirm_password,
      }
      this.userService.signUpUser(reqdata).subscribe((response: any) => {
        console.log(response);
        console.log("Registration successful", response);
        (response.status == true); {
          this.router.navigateByUrl('/login');
        }
      })
    }
  }

}
