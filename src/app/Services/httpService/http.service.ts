import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl

  constructor(private httpclient: HttpClient) { }

  post(url: string, data: any = null, isHeaderRequired: any = false, headers: any = null) {
    return this.httpclient.post(url, data, isHeaderRequired && headers)
  }
  getService(url: string, token: boolean = false, httpOptions: any) {
    return this.httpclient.get(this.baseUrl + url, token && httpOptions)
  }
  putService(url: string, reqdata: any, token: boolean = true, httpOptions: any) {
    return this.httpclient.put(this.baseUrl + url, reqdata, token && httpOptions)
  }
  deleteService(url: string, token: boolean = true, httpOptions: any) {
    return this.httpclient.delete(this.baseUrl + url, token && httpOptions);
  }
  postService(url: string, reqdata: any, token: boolean = false, httpOptions: any) {
    return this.httpclient.post(this.baseUrl + url, reqdata, token && httpOptions)
  }

}
