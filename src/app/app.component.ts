import { Component } from '@angular/core';
import {
  IonApp,
  IonSplitPane,
  IonContent,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, LayoutComponent],
})
export class AppComponent {
  constructor() {}
}
