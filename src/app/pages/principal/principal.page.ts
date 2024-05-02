import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FabButtonComponent } from 'src/app/components/fab-button/fab-button.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    CommonModule,
    TranslocoModule,
    HeaderComponent,
    FabButtonComponent,
  ],
})
export class PrincipalPage {
  constructor() {}
}
