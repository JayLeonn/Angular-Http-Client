import { HttpService } from './../services/http.service';
import { Book } from './../entities/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  books: Book[] = this.httpService.books;

  titleFilter: string = '';
  authorFilter: string = '';

  sortOrder: string = 'title';

  constructor(
    private bookService: BookService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.httpService.getBooks();
  }

  canShow(book: Book): boolean {
    return (
      book.title.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
      book.author.toLowerCase().includes(this.authorFilter.toLowerCase())
    );
  }

  deleteBook(book: Book): void {
    this.httpService.deleteBook(book.id);
  }
}
