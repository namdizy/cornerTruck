import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { FoodTruckProfilePage } from '../../foodtruck/profile/profile';

import { Connectivity } from '../../../providers/connectivity';
import { GoogleMaps } from '../../../providers/maps/google-maps';

@Component({
  templateUrl: 'tabs.html'
})
export class FoodTruckTabsPage {
  profileRoot: any = FoodTruckProfilePage;

  constructor(public platform: Platform, public connectionService: Connectivity, public maps: GoogleMaps) {
    this.platform.ready().then(() => {
      maps.loadGoogleMaps();
      connectionService.isOnline();
      connectionService.watchForNetworkChanges();
    });
  }


}
