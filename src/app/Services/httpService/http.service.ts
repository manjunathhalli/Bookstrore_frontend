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
}
