import { Book, Category } from "../models/book.models";

export const mockedBooks: Book[] = [
  {
    id: 1,
    bestseller: true,
    category: Category.THRILLER,
    name: 'Test 1',
    price: 0
  },
  {
    id: 2,
    bestseller: false,
    category: Category.FANTASY,
    name: 'Test 2',
    price: 100
  },
  {
    id: 3,
    bestseller: false,
    category: Category.FANTASY,
    name: 'Test 3',
    price: 15
  },
];