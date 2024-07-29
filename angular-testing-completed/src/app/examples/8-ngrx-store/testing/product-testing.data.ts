import { Product } from '../models/store.models';

export const mockProduct: Product = {
  id: 333,
  name: 'name',
  price: 1234,
  thumbnail: 'pizza.jpg',
};

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'name',
    price: 100,
    thumbnail: 'test.jpg',
  },
  {
    id: 2,
    name: 'name2',
    price: 200,
    thumbnail: 'test2.jpg',
  },
];
