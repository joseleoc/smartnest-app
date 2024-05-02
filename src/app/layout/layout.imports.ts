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
  IonFabList,
  IonText,
} from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';

export const LayoutComponentImports = [
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
];
