import { HeaderComponent } from 'src/app/components/header/header.component';
import { FabButtonComponent } from 'src/app/components/fab-button/fab-button.component';
import { TranslocoModule } from '@jsverse/transloco';
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

export const TransactionsPageImports = [
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
];
