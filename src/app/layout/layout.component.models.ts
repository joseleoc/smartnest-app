export interface LayoutPage {
  title: keyof typeof AppPages;
  url: string;
  icon: string;
}

export enum AppPages {
  'PRINCIPAL' = 'PRINCIPAL',
  'BILLBOARD' = 'BILLBOARD',
  'EXPENSES' = 'EXPENSES',
  'INCOME' = 'INCOME',
  'REPORTS' = 'REPORTS',
  'PROPERTIES' = 'PROPERTIES',
}
