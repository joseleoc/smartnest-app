import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private _currencySymbol = new BehaviorSubject('$');
  public get currencySymbol() {
    return this._currencySymbol.getValue();
  }
  public set currencySymbol(value: string) {
    this._currencySymbol.next(value);
  }
  public currencySymbol$ = this._currencySymbol.asObservable();

  constructor() {}
}
