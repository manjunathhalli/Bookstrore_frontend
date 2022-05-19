import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  signUpUser(reqdata: any) {
    const params = {
      role: reqdata.role,
      first_name: reqdata.first_name,
      last_name: reqdata.last_name,
      phone_no: reqdata.phone_no,
      email: reqdata.email,
      password: reqdata.password,
      confirm_password: reqdata.confirm_password

    }
    return this.httpService.post(`${environment.baseUrl}/register`, params);
  }

  loginUser(reqdata: any) {
    const params = {
      email: reqdata.email,
      password: reqdata.password
    }
    return this.httpService.post(`${environment.baseUrl}/login`, params);
  }
}

