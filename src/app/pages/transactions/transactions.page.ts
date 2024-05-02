import { Component, inject, signal } from '@angular/core';

import { TranslocoService } from '@jsverse/transloco';
import { TransactionsPageImports } from './transactions.imports';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone: true,
  imports: TransactionsPageImports,
})
export class TransactionsPage {
  // -----------------------------------------------------------------------------------------------------
  // @ Services
  // -----------------------------------------------------------------------------------------------------
  private transloco = inject(TranslocoService);
  // -----------------------------------------------------------------------------------------------------
  // @ Local properties
  // -----------------------------------------------------------------------------------------------------
  title = signal('');

  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------
  constructor() {}

  test(ev: { tab: string }) {
    const { tab } = ev;
    const tabName = tab.toLocaleLowerCase();
    if (tabName.includes('expense')) {
      this.title.set(this.transloco.translate('REGISTER_EXPENSE.TITLE'));
    } else if (tabName.includes('income')) {
      this.title.set(this.transloco.translate('REGISTER_INCOME.TITLE'));
    }
  }
}
