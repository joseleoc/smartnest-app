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
    path: 'properties',
    loadComponent: () => import('./pages/properties/properties.page').then( m => m.PropertiesPage)
  },
];
