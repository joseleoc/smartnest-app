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

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    TranslocoModule,
    IonMenuButton,
    IonButtons,
  ],
})
export class PrincipalPage {
  constructor() {}
}
