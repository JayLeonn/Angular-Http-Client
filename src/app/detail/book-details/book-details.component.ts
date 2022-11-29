import { HttpService } from './../../services/http.service';
import { BookService } from '../../services/book.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/entities/book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookdetailsComponent implements OnInit {
  bookId: number = 0;
  book: Book = new Book(0, 'New Book', 'Joonas', 10);

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private httpService: HttpService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = +params['id']; // We need to get the book id from URL, to be able to find the correct book

      if (this.bookId !== 0) {
        this.book = this.httpService.getBook(this.bookId);
      }
    });
  }

  handleClick(): void {
    if (this.bookId !== 0) {
      this.httpService.updateBook(this.book);
    } else {
      this.httpService.createBook(this.book);
    }
    this.location.back();
  }
}
