import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
  booksArray: any = [];

  constructor(private httpGetAllBook: BookService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllBook();
  }

  getAllBook() {
    this.httpGetAllBook.usergetallbooks().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.books;
      console.log(this.booksArray);
    });
  }

  quickview(Book: any) {

    localStorage.setItem('bookId', Book.id);
    this.router.navigateByUrl('/dashboard/quickview/' + Book.id)

  }
}

