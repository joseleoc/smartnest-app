import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    CommonModule,
    TranslocoModule,
    HeaderComponent,
  ],
})
export class ReportsPage {
  constructor() {}
}
