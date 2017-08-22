import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { FoodTruckProfilePage } from '../../foodtruck/profile/profile';
import { FoodTruckSettingsPage } from '../../foodtruck/settings/settings';
import { FoodTruckFeedPage }  from '../../foodtruck/feed/feed';
import { FoodTruckCheckInPage } from '../../foodtruck/checkIn/checkIn';

import { Connectivity } from '../../../providers/connectivity';
import { GoogleMaps } from '../../../providers/maps/google-maps';

@Component({
  templateUrl: 'tabs.html'
})
export class FoodTruckTabsPage {
  profileRoot: any = FoodTruckProfilePage;
  settingsRoot: any = FoodTruckSettingsPage;
  feedRoot: any = FoodTruckFeedPage;
  checkInRoot: any = FoodTruckCheckInPage;

  constructor(public platform: Platform, public connectionService: Connectivity, public maps: GoogleMaps) {
    this.platform.ready().then(() => {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs pages');
  }

}
