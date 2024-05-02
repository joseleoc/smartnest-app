import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
} from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { PropertySelectorComponent } from 'src/app/components/property-selector/property-selector.component';

@Component({
  selector: 'app-register-income',
  templateUrl: './register-income.component.html',
  styleUrls: ['./register-income.component.scss'],
  standalone: true,
  imports: [
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
  ],
})
export class RegisterIncomeComponent {
  // -----------------------------------------------------------------------------------------------------
  // @ Services
  // -----------------------------------------------------------------------------------------------------
  formBuilder = new FormBuilder();

  // -----------------------------------------------------------------------------------------------------
  // @ Local properties
  // -----------------------------------------------------------------------------------------------------
  form = this.formBuilder.group({
    amount: [0, [Validators.required]],
    ticket: ['', [Validators.required]],
    date: [new Date().toISOString(), [Validators.required]],
    property: ['', [Validators.required]],
  });
  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  onSubmit() {
    console.log(this.form.value);
  }
}
