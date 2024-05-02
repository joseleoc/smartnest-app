import { Component } from '@angular/core';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonIcon, IonFabList],
})
export class FabButtonComponent {
  constructor() {}
}
