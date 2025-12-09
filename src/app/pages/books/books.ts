import { Component } from '@angular/core';

import { BooksService } from '../../services/books.service';
import { CartsService } from '../../services/carts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class BooksComponent {

  books: any[] = [];
  constructor(private booksService: BooksService, public cartsService: CartsService) {}


  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        console.log('books fetched:', this.books);
        
      },
      error: (err) => console.error('Books fetch error', err),
    });
  }


}
