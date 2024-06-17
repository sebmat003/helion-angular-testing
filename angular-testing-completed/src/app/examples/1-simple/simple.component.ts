import { Component, effect, signal, WritableSignal } from '@angular/core';
import { Book, Category } from './models/book.models';
import { TitleCasePipe } from '@angular/common';
import { BOOKS } from './consts/books.const';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.scss',
})
export class SimpleComponent {
  readonly categories = Object.values(Category);
  readonly books: Book[] = BOOKS;
  filteredBooks = [...this.books];
  activeCategory: WritableSignal<Category | 'ALL'> = signal('ALL');

  constructor() {
    effect(() => {
      this.filteredBooks =
        this.activeCategory() === 'ALL'
          ? this.books
          : this.books.filter(
              (book) => book.category === this.activeCategory()
            );
    });
  }
}
