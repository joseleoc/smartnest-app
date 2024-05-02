import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonAccordion,
  IonAccordionGroup,
  IonRouterOutlet,
  IonFab,
  IonFabButton,
  IonFabList,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add,
  appsOutline,
  barChartOutline,
  businessOutline,
  cashOutline,
  homeOutline,
  statsChartOutline,
  walletOutline,
} from 'ionicons/icons';
import { TranslocoModule } from '@jsverse/transloco';
import { LayoutPage } from './layout.component.models';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonFabList,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonAccordion,
    IonAccordionGroup,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    TranslocoModule,
  ],
})
export class LayoutComponent {
  // -----------------------------------------------------------------------------------------------------
  // @ Services
  // -----------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------
  // @ LOCAL PROPERTIES
  // -----------------------------------------------------------------------------------------------------
  public appPages: LayoutPage[] = [
    { title: 'PRINCIPAL', url: '/principal', icon: 'bar-chart-outline' },
    {
      title: 'BILLBOARD',
      url: '/billboard',
      icon: 'business-outline',
    },
    {
      title: 'INCOME',
      url: '/income',
      icon: 'cash-outline',
    },
    {
      title: 'EXPENSES',
      url: '/expenses',
      icon: 'wallet-outline',
    },
    {
      title: 'REPORTS',
      url: '/reports',
      icon: 'stats-chart-outline',
    },
    {
      title: 'CONDOMINIUM',
      icon: 'business-outline',
      children: [
        { title: 'COMMUNITIES', icon: 'apps-outline', url: '/communities' },
        { title: 'PROPERTIES', icon: 'home-outline', url: './properties' },
      ],
    },
  ];
  // -----------------------------------------------------------------------------------------------------
  // @ CONSTRUCTOR
  // -----------------------------------------------------------------------------------------------------
  constructor() {
    addIcons({
      businessOutline,
      barChartOutline,
      cashOutline,
      walletOutline,
      statsChartOutline,
      appsOutline,
      homeOutline,
    });
  }
}
