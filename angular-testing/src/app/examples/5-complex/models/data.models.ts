export interface Expense {
  id: number;
  name: string;
  category: ExpenseCategory;
  date: string;
  sum: number;
}

export enum ExpenseCategory {
  CAR = 'Car',
  HEALTHCARE = 'Healthcare',
  SHOPPING = 'Shopping',
  EDUCATION = 'Education',
  DEBT = 'Debt',
  ENTERTAINMENT = 'Entertainment',
}
