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

  Book: any;
  booksquantity:any;

  constructor(private bookService: BookService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllBook();
  }

  getAllBook() {
    this.bookService.usergetallbooks().subscribe((response: any) => {
      console.log(response);
      this.booksquantity = response.books.length;
      this.booksArray = response.books;
      console.log(this.booksArray);
    });
  }

  AddToBag(Book: any) {
    this.bookService.addToBag(Book.id).subscribe((response: any) => {
      console.log('book add to Bag ', response)
    })
  }

  quickview(Book: any) {

    localStorage.setItem('bookId', Book.id);
    this.router.navigateByUrl('/dashboard/quickview/' + Book.id)

  }
}

