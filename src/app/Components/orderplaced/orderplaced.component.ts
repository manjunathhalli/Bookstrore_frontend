import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.scss']
})
export class OrderplacedComponent implements OnInit {
  OrderId : any;
  constructor() { }

  ngOnInit(): void {
    this.OrderId = localStorage.getItem('OrderId');
    console.log("OrderId");
    console.log(this.OrderId);
  }


}
