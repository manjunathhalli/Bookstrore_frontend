import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {

  bookSArray: any = [];
  Book: any;
  
  cartquantity:any;

  constructor(private bookservice: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getCartbook();
  }

  getCartbook() {
    this.bookservice.getCart().subscribe((response: any) => {
      console.log(response);
      this.cartquantity = response.Cart.length
      this.bookSArray = response.Cart;
      console.log(this.bookSArray);

    });
  }
  removeCart(Book: any) {
    this.bookservice.removecartitem(Book.id).subscribe((response: any) => {
      console.log('Remove Cart Item successfully', response);
    })
  }


}
