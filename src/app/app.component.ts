import { Component, inject } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { LayoutComponent } from './layout/layout.component';
import { IconsService } from './services/icons/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, LayoutComponent],
})
export class AppComponent {
  // -----------------------------------------------------------------------------------------------------
  // @ Services
  // -----------------------------------------------------------------------------------------------------
  private iconsService = inject(IconsService);
  // -----------------------------------------------------------------------------------------------------
  // @ CONSTRUCTOR
  // -----------------------------------------------------------------------------------------------------
  constructor() {
    this.iconsService.addIonicIcons();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ LIFECYCLE HOOKS
  // -----------------------------------------------------------------------------------------------------
}
