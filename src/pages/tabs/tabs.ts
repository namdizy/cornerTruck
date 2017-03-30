import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TrendingPage } from '../trending/trending';
import { PinPage } from '../pin/pin';
import { ProfilePage } from '../profile/profile';

import { Platform } from 'ionic-angular';


import { Connectivity } from '../../providers/connectivity';
import { GoogleMaps } from '../../providers/maps/google-maps'
import { YelpService } from '../../providers/services/yelp.service';

@Component({
  templateUrl: 'tabs.html',
  providers: [Connectivity, GoogleMaps, YelpService]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  homeRoot: any = HomePage;
  trendingRoot: any = TrendingPage;
  pinRoot: any = PinPage;
  profileRoot: any  = ProfilePage;

  constructor(public platform: Platform, public connectionService: Connectivity) {
    this.platform.ready().then(() => {
      connectionService.isOnline();
      connectionService.watchForNetworkChanges();
    })
  }


}
