import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { HomePage } from '../home/home';
import { TrendingPage } from '../trending/trending';
import { PinPage } from '../pin/pin';
import { ProfilePage } from '../profile/profile';

import { Connectivity } from '../../providers/connectivity';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homeRoot: any = HomePage;
  trendingRoot: any = TrendingPage;
  pinRoot: any = PinPage;
  profileRoot: any  = ProfilePage;

  constructor(public platform: Platform, public connectionService: Connectivity) {
    this.platform.ready().then(() => {
      connectionService.isOnline();
      connectionService.watchForNetworkChanges();
    });
  }


}
