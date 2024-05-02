import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  playCircle,
  add,
  appsOutline,
  barChartOutline,
  businessOutline,
  cardOutline,
  cashOutline,
  homeOutline,
  statsChartOutline,
  walletOutline,
} from 'ionicons/icons';
@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor() {}

  addIonicIcons() {
    addIcons({
      add,
      playCircle,
      businessOutline,
      barChartOutline,
      cashOutline,
      walletOutline,
      statsChartOutline,
      appsOutline,
      homeOutline,
      cardOutline,
    });
  }
}
