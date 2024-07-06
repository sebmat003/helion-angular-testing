import { Expense, ExpenseCategory } from './../models/data.models';

export const expensesMock: Expense[] = [
  {
    id: 1,
    name: 'mechanic',
    category: ExpenseCategory.CAR,
    date: '2020-02-02',
    sum: 50,
  },
  {
    id: 2,
    name: 'leasing',
    category: ExpenseCategory.DEBT,
    date: '2020-01-13',
    sum: 45,
  },
  {
    id: 3,
    name: 'fuel',
    category: ExpenseCategory.CAR,
    date: '2020-03-15',
    sum: 20.1,
  },
  {
    id: 4,
    name: 'books',
    category: ExpenseCategory.EDUCATION,
    date: '2024-07-12',
    sum: 20.1,
  },
  {
    id: 5,
    name: 'food',
    category: ExpenseCategory.SHOPPING,
    date: '2025-04-22',
    sum: 600,
  },
  {
    id: 6,
    name: 'shopping mall',
    category: ExpenseCategory.SHOPPING,
    date: '2025-03-01',
    sum: 789,
  },
];
