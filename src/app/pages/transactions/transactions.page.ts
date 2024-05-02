import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTabs,
  IonTabBar,
  IonToolbar,
  IonTabButton,
  IonIcon,
  IonBackButton,
  IonButtons,
  IonTitle,
} from '@ionic/angular/standalone';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FabButtonComponent } from 'src/app/components/fab-button/fab-button.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonButtons,
    IonToolbar,
    IonContent,
    CommonModule,
    TranslocoModule,
    HeaderComponent,
    IonHeader,
    IonTabs,
    IonTabButton,
    IonIcon,
    IonTabBar,
    IonBackButton,
    FabButtonComponent,
  ],
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
