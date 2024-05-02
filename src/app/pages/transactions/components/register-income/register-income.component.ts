import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import { RegisterIncomeComponentImports } from './register-income.imports';

@Component({
  selector: 'app-register-income',
  templateUrl: './register-income.component.html',
  styleUrls: ['./register-income.component.scss'],
  standalone: true,
  imports: RegisterIncomeComponentImports,
})
export class RegisterIncomeComponent {
  // -----------------------------------------------------------------------------------------------------
  // @ Services
  // -----------------------------------------------------------------------------------------------------
  private formBuilder = new FormBuilder();
  private currencyService = inject(CurrencyService);
  // -----------------------------------------------------------------------------------------------------
  // @ Local properties
  // -----------------------------------------------------------------------------------------------------
  form = this.formBuilder.group({
    amount: [0, [Validators.required, Validators.min(1)]],
    ticket: ['', [Validators.required]],
    date: [new Date().toISOString(), [Validators.required]],
    property: ['', [Validators.required]],
  });

  isCalendarOpen = signal(false);
  currencySymbol$ = this.currencyService.currencySymbol$;
  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  onSubmit() {
    console.log(this.form);
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('form valid');
    }
  }

  showCalendar() {
    this.isCalendarOpen.set(true);
  }

  closeCalendar() {
    this.isCalendarOpen.set(false);
  }
}
