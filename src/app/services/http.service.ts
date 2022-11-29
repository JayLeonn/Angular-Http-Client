import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../entities/book';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  books: Book[] = [];

  constructor(private http: HttpClient) {}

  private verify(book: Book) {
    let existing = this.books.find((b) => b.id == book.id);
    if (existing) Object.assign(existing, book);
    else this.books.push(book);
  }

  getBooks(): Book[] {
    this.http.get<Book[]>('/api/books').subscribe((books) => {
      // No verify
      // books.forEach(book => this.books.push(book));

      // With verify
      books.forEach((book) => this.verify(book));
    });
    return this.books;
  }

  getBook(id: number): Book {
    let book =
      this.books.find((b) => b.id == id) || new Book(0, 'Not', 'Found');
    this.http.get<Book>('/api/books/' + id).subscribe((b: Book) => {
      this.verify(b);
      Object.assign(book, b);
    });
    return book;
  }

  deleteBook(id: number) {
    let response = this.http.delete('/api/books/' + id, {
      responseType: 'text',
    });

    response.subscribe({
      next: () => {
        let index = this.books.findIndex((book) => book.id == id);
        this.books.splice(index, 1);
      },
      error: (err) => {
        console.error('ERROR!', err);
      },
    });
  }

  createBook(book: Book): void {
    this.http.post<Book>('/api/books', book).subscribe((book: Book) => {
      this.verify(book);
    });
  }

  updateBook(book: Book): void {
    let updatedBook = this.http.put<Book>('/api/books/' + book.id, book);

    updatedBook.subscribe({
      next: (book) => {
        this.verify(book);
      },
      error: (err) => {
        console.error('ERROR! ', err);
      },
    });
  }
}
