import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FabButtonComponent } from 'src/app/components/fab-button/fab-button.component';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.page.html',
  styleUrls: ['./billboard.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonToolbar,
    CommonModule,
    TranslocoModule,
    HeaderComponent,
    FabButtonComponent,
  ],
})
export class BillboardPage {
  constructor() {}
}
