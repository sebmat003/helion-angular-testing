import { ExpenseCategory } from './data.models';

export interface Filters {
  categories: ExpenseCategory[] | null;
  year: number | null;
}
