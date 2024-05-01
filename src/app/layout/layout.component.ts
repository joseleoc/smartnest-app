import { Component, inject } from '@angular/core';
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
  IonRouterOutlet,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { businessOutline } from 'ionicons/icons';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonButtons,
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
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonMenuButton,
    IonTitle,
  ],
})
export class LayoutComponent {
  // -----------------------------------------------------------------------------------------------------
  // @ Services
  // -----------------------------------------------------------------------------------------------------
  transloco = inject(TranslocoService);

  // -----------------------------------------------------------------------------------------------------
  // @ LOCAL PROPERTIES
  // -----------------------------------------------------------------------------------------------------
  public appPages = [
    {
      title: this.transloco.translate('BILLBOARD.TITLE'),
      url: '/billboard',
      icon: 'business-outline',
    },
    // { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  // -----------------------------------------------------------------------------------------------------
  // @ CONSTRUCTOR
  // -----------------------------------------------------------------------------------------------------
  constructor() {
    addIcons({ businessOutline });
    console.log(this.transloco);
  }
}
