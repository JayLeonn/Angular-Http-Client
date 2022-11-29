import { Injectable } from '@angular/core';
import { Book } from '../entities/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      title: 'Odysseia',
      author: 'Homeros',
      description: 'Long way back',
      price: 12.3,
      published: '1922-03-03T22:00:00.000Z',
    },
    {
      id: 2,
      title: 'Hobbit',
      author: 'Tolkien',
      description: 'There and back',
      price: 11.2,
      published: '1937-02-02T22:00:00.000Z',
    },
    {
      id: 3,
      title: 'Two towers',
      author: 'Tolkien',
      description: 'Some balls?',
      price: 13.4,
      published: '1954-10-05T22:00:00.000Z',
    },
    {
      id: 4,
      title: 'Player piano',
      author: 'Vonnegut',
      description: 'Engineers for-ever',
      price: 14.9,
      published: '1952-08-31T22:00:00.000Z',
    },
  ];

  constructor() {}

  getAll(): Book[] {
    return this.books;
  }

  deleteBook(id: number): void {
    let index = this.books.findIndex((b) => b.id == id);
    if (index < 0) return;
    this.books.splice(index, 1); //Deletes 1 book from books array at given index
  }

  get(id: number): Book {
    let book = this.books.find((b) => b.id == id);
    if (!book) {
      let nextId = this.books.reduce((a, b) => (a.id > b.id ? a : b)).id + 1;
      book = new Book(nextId, 'A new Book!', 'Joonas', 10); // Create a random id between 4 and 100 (since IDs 1-4 are in use)
      this.books.push(book);
    }
    return book;
  }
}
