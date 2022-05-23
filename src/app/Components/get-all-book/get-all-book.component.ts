import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
  booksArray: any = [];
  searchBook = "";
  Book: any;
  booksquantity: any;

  constructor(private bookService: BookService, private router: Router, private activatedroute: ActivatedRoute, private data: DataService) { }


totalLength:any;
page:number=1;

  ngOnInit(): void {

    this.getAllBook();
    this.data.incomingData.subscribe((res) => {
      console.log("Searching Process", res)
      this.searchBook = res;
    })
  }

  getAllBook() {
    this.bookService.usergetallbooks().subscribe((response: any) => {
      console.log(response);
      this.booksquantity = response.books.length;

      this .totalLength=  response.books.length;
      this.booksArray = response.books;
      console.log(this.booksArray);
    });
  }

  AddToBag(Book: any) {
    this.bookService.addToBag(Book.id).subscribe((response: any) => {
      console.log('book add to Bag ', response)
      this.router.navigateByUrl('./getcart')
    })
  }

  quickview(Book: any) {

    localStorage.setItem('bookId', Book.id);
    this.router.navigateByUrl('/dashboard/quickview/' + Book.id)

  }

  lowtohigh() {
    this.booksArray = this.booksArray.sort((low: any, high: any) => low.price - high.price);
  }
  hightolow() {
    this.booksArray = this.booksArray.sort((low: any, high: any) => high.price - low.price);
  }
  newestarrivals() {
    this.booksArray.reverse();
  }
}

