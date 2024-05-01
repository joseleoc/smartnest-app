import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonHeader,
    CommonModule,
    TranslocoModule,
    HeaderComponent,
  ],
})
export class ExpensesPage {
  constructor() {}
}
