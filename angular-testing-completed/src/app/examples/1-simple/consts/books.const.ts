import { Book, Category } from '../models/book.models';

export const BOOKS: Book[] = [
  {
    id: 1,
    bestseller: false,
    category: Category.BIOGRAPHY,
    name: 'My biography',
    price: 20,
  },
  {
    id: 2,
    bestseller: true,
    category: Category.FANTASY,
    name: 'Harry Potter and the Philosopher`s Stone',
    price: 20,
  },
  {
    id: 3,
    bestseller: true,
    category: Category.FANTASY,
    name: 'Harry Potter and the Chamber of Secrets',
    price: 30,
  },
  {
    id: 4,
    bestseller: true,
    category: Category.FANTASY,
    name: 'Harry Potter and the Prisoner of Azkaban',
    price: 30,
  },
  {
    id: 5,
    bestseller: true,
    category: Category.FANTASY,
    name: 'Harry Potter and the Goblet of Fire',
    price: 30,
  },
  {
    id: 6,
    bestseller: true,
    category: Category.FANTASY,
    name: 'Harry Potter and the Order of the Phoenix',
    price: 30,
  },
  {
    id: 7,
    bestseller: false,
    category: Category.SCIENCE_FICTION,
    name: 'Day zero',
    price: 10,
  },
  {
    id: 8,
    bestseller: false,
    category: Category.THRILLER,
    name: 'My biography',
    price: 5,
  },
  {
    id: 9,
    bestseller: false,
    category: Category.SCIENCE_FICTION,
    name: 'Solaris',
    price: 20,
  },
  {
    id: 10,
    bestseller: true,
    category: Category.SCIENCE_FICTION,
    name: 'Ender`s game',
    price: 40,
  },
];
