import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonText,
  IonDatetimeButton,
  IonDatetime,
  IonModal,
  IonList,
  IonAccordion,
  IonAccordionGroup,
} from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { PropertySelectorComponent } from 'src/app/components/property-selector/property-selector.component';

@Component({
  selector: 'app-register-income-form',
  templateUrl: './register-income-form.component.html',
  styleUrls: ['./register-income-form.component.scss'],
  standalone: true,
  imports: [
    IonAccordion,
    IonAccordionGroup,
    IonList,
    IonText,
    ReactiveFormsModule,
    IonInput,
    IonItem,
    IonButton,
    IonLabel,
    IonDatetimeButton,
    IonDatetime,
    IonModal,
    PropertySelectorComponent,
    TranslocoModule,
  ],
})
export class RegisterIncomeFormComponent {
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
