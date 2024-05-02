export interface LayoutPage {
  title: keyof typeof AppPages;
  url?: string;
  icon: string;
  children?: LayoutPage[];
}

export enum AppPages {
  'PRINCIPAL' = 'PRINCIPAL',
  'BILLBOARD' = 'BILLBOARD',
  'EXPENSES' = 'EXPENSES',
  'INCOME' = 'INCOME',
  'REPORTS' = 'REPORTS',
  'CONDOMINIUM' = 'CONDOMINIUM',
  'PROPERTIES' = 'PROPERTIES',
  'COMMUNITIES' = 'COMMUNITIES',
  'TRANSACTIONS' = 'Transactions',
}
