import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;
  header: any = "";
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('BookStore')
  }

  user=localStorage.getItem('BookStore')
  usergetallbooks() {
    this.token = localStorage.getItem('BookStore')
    console.log("inside getall book service");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('/displayAllBooks', true, header)
  }

  addToBag(book_id: any) {
    console.log('book_id', book_id)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('/addBookToCartByBookId', { book_id }, true, header)
  }

  getCart() {
    this.token = localStorage.getItem('BookStore');
    //  console.log('token', this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('/getAllBooksInCart', true, header)
  }

  removecartitem(id: any) {
    this.token = localStorage.getItem('BookStore');
    console.log(id)
    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }),
      body: { id: id }
    }
    return this.httpService.deleteService("/deleteBookByCartId", true, header)
  }


  //place order 
  checkOut(reqData: any) {
    console.log(reqData)
    let headers = {
      address_id: reqData.orders.address_id,
      name: reqData.orders.name,
      quantity: reqData.orders.quantity
    }
    
    //   console.log(this.user);
    this.getToken();
    return this.httpService.post(`${environment.baseUrl}/placeOrder`, headers, true, this.header);
  }



  getToken() {
    this.header = {
      headers: { Authorization: "Bearer " + this.user }
    }
  }
}
