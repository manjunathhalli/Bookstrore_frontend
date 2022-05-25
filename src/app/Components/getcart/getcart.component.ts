import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {

  orderList: any = [];
  bookSArray: any = [];

  Book: any;
  AddreesArray: any = [];

  cartquantity: any;
  address: any;
  OrderId: any;

  customerForm!: FormGroup;
  submitted = false;
  constructor(private bookservice: BookService, private router: Router, private formbuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.getCartbook();

    this.customerForm = this.formbuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      landmark: ['', Validators.required],
      pincode: ['', Validators.required],
      address_type: ['', Validators.required],
    })
  }

  onUpdateaddress() {
    console.log(this.customerForm.value);
    if (this.customerForm.valid) {
      let reqData = {
        address: this.customerForm.value.address,
        city: this.customerForm.value.city,
        state: this.customerForm.value.state,
        landmark: this.customerForm.value.landmark,
        pincode: this.customerForm.value.pincode,
        // address_type: "home",
        address_type: this.customerForm.value.address_type,
      }
      this.user.AddressService(reqData).subscribe((response: any) => {
        console.log(response);
        this.AddreesArray = response.address;
        console.log('inside the USER SERVICE')
      })
    }
  }

  getCartbook() {
    this.bookservice.getCart().subscribe((response: any) => {
      console.log(response);
      this.cartquantity = response.Cart.length
      this.bookSArray = response.Cart;
      console.log(this.bookSArray);

    });
  }

  ordersummary() {
    let orders: Array<any> = []
    for (this.Book of this.bookSArray) {

      let order = {
        "address_id": this.Book.id,
        "name": this.Book.name,
        "quantity": this.Book.book_quantity,
      }

      orders.push(order)

      let reqData = {
        orders: orders[0]
      }

      console.log(reqData)

      this.bookservice.checkOut(reqData).subscribe((response: any) => {
        console.log(response);
        this.OrderId = response.OrderId;
        console.log(this.OrderId);
        localStorage.setItem('OrderId', this.OrderId)

        this.router.navigateByUrl("/dashboard/orderplaced")
      })
    }
  }

  removeCart(Book: any) {
    console.log(Book);
    this.bookservice.removecartitem(Book.id).subscribe((response: any) => {
      console.log('Remove Cart Item successfully', response);
    })
  }
}
