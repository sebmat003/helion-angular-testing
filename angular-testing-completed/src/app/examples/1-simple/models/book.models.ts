export interface Book {
  id: number,
  name: string,
  category: Category,
  bestseller: boolean,
  price: number
}

export enum Category {
  FANTASY = 'fantasy',
  SCIENCE_FICTION = 'science fiction',
  BIOGRAPHY = 'biography',
  THRILLER = 'thriller'
}