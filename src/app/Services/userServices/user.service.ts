import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  header: any = "";
  token: any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('BookStore')
  }
  user = localStorage.getItem('BookStore')
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

  AddressService(reqdata: any) {
    let headers = {
      address: reqdata.address,
      city: reqdata.city,
      state: reqdata.state,
      landmark: reqdata.landmark,
      pincode: reqdata.pincode,
      address_type: reqdata.address_type
    }
    console.log(this.user);
    this.getToken();
    return this.httpService.post(`${environment.baseUrl}/addAddress`, headers, true, this.header);
  }

  getToken() {
    this.header = {
      headers: { Authorization: "Bearer " + this.user }
    }
  }
}

