import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () =>
      import('./pages/principal/principal.page').then((m) => m.PrincipalPage),
  },
  {
    path: 'billboard',
    loadComponent: () =>
      import('./pages/billboard/billboard.page').then((m) => m.BillboardPage),
  },
  {
    path: 'expenses',
    loadComponent: () =>
      import('./pages/expenses/expenses.page').then((m) => m.ExpensesPage),
  },
  {
    path: 'income',
    loadComponent: () =>
      import('./pages/income/income.page').then((m) => m.IncomePage),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports.page').then((m) => m.ReportsPage),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./pages/transactions/transactions.page').then(
        (m) => m.TransactionsPage,
      ),
    children: [
      {
        path: 'register-income',
        loadComponent: () =>
          import(
            './pages/transactions/components/register-income/register-income.component'
          ).then((m) => m.RegisterIncomeComponent),
      },
      {
        path: 'register-expense',
        loadComponent: () =>
          import(
            './pages/transactions/components/register-expense/register-expense.component'
          ).then((m) => m.RegisterExpenseComponent),
      },
      {
        path: '',
        redirectTo: 'register-income',
        pathMatch: 'full',
      },
    ],
  },
];
