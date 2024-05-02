import { Component } from '@angular/core';

import { LayoutPage } from './layout.component.models';
import { LayoutComponentImports } from './layout.imports';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: LayoutComponentImports,
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
    { title: 'TRANSACTIONS', url: '/transactions', icon: 'card-outline' },
    {
      title: 'BILLBOARD',
      url: '/billboard',
      icon: 'business-outline',
    },
    {
      title: 'INCOME',
      url: '/income',
      icon: 'wallet-outline',
    },
    {
      title: 'EXPENSES',
      url: '/expenses',
      icon: 'cash-outline',
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
  constructor() {}
}
