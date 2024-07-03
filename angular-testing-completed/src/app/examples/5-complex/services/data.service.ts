import { Injectable } from '@angular/core';
import { Expense, ExpenseCategory } from '../models/data.models';
import { Observable, of } from 'rxjs';
import { EXPENSES } from '../consts/data.consts';

@Injectable()
export class DataService {
  getAllExpenses(): Observable<Expense[]> {
    return of(EXPENSES);
  }

  getExpensesByCategory(category: ExpenseCategory) {
    return of(EXPENSES.filter((expense) => expense.category === category));
  }

  getExpensesByYear(year: number) {
    return of(
      EXPENSES.filter((expense) => expense.date.includes(year.toString()))
    );
  }
}
