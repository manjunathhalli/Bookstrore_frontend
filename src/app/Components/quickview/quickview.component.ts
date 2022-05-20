import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  BookId: any;
  book: any;
  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem("bookId");
    console.log(this.BookId);
    this.getUserAllBook();
  }

  getUserAllBook() {
    this.bookservice.usergetallbooks().subscribe((response: any) => {
      response.books.forEach((element: any) => {
        if (element.id == this.BookId) {
          this.book = element;
        }
      });
    })
  }

}
