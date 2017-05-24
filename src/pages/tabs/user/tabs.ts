import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { HomePage } from '../../user/home/home';
import { TrendingPage } from '../../user/trending/trending';
import { PinPage } from '../../user/pin/pin';
import { ProfilePage } from '../../user/profile/profile';

import { Connectivity } from '../../../providers/connectivity';
import { GoogleMaps } from '../../../providers/maps/google-maps';

@Component({
  templateUrl: 'src/pages/tabs/user/tabs.html'
})
export class TabsPage {
  homeRoot: any = HomePage;
  trendingRoot: any = TrendingPage;
  pinRoot: any = PinPage;
  profileRoot: any  = ProfilePage;

  constructor(public platform: Platform, public connectionService: Connectivity, public maps: GoogleMaps) {
    this.platform.ready().then(() => {
      maps.loadGoogleMaps();
      connectionService.isOnline();
      connectionService.watchForNetworkChanges();
    });
  }


}
