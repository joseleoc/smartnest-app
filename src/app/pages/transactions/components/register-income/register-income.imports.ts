import {
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonDatetimeButton,
  IonDatetime,
  IonModal,
  IonList,
  IonContent,
  IonLabel,
  IonNote,
} from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { PropertySelectorComponent } from 'src/app/components/property-selector/property-selector.component';
import { AsyncPipe, NgStyle } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export const RegisterIncomeComponentImports = [
  IonLabel,
  ReactiveFormsModule,
  IonContent,
  IonList,
  IonText,
  IonInput,
  IonItem,
  IonButton,
  IonDatetimeButton,
  IonDatetime,
  IonModal,
  PropertySelectorComponent,
  TranslocoModule,
  IonNote,
  NgStyle,
  AsyncPipe,
];
