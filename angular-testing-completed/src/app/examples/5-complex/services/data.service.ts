import { Injectable } from '@angular/core';
import { Expense, ExpenseCategory } from '../models/data.models';
import { Observable, of } from 'rxjs';
import { EXPENSES } from '../consts/data.consts';
import { Filters } from '../models/filters.models';

@Injectable()
export class DataService {
  getAllExpenses(): Observable<Expense[]> {
    return of(EXPENSES);
  }

  getFilteredExpenses({ categories, year }: Filters) {
    return of(
      EXPENSES.filter((expense) => {
        if (categories?.length && year) {
          return (
            this.checkCategory(categories, expense) &&
            this.checkYear(year, expense)
          );
        }
        if (categories?.length) {
          return this.checkCategory(categories, expense);
        }
        if (year) {
          return this.checkYear(year, expense);
        }
        return true;
      })
    );
  }

  private checkCategory(categories: ExpenseCategory[], expense: Expense) {
    return categories.includes(
      expense.category.toUpperCase() as ExpenseCategory
    );
  }

  private checkYear(year: number, expense: Expense) {
    return expense.date.includes(year.toString());
  }
}
