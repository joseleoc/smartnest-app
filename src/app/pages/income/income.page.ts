import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RegisterIncomeFormComponent } from './components/register-income-form/register-income-form.component';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    CommonModule,
    TranslocoModule,
    HeaderComponent,
    RegisterIncomeFormComponent,
  ],
})
export class IncomePage {
  constructor() {}
}
