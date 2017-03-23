/**
 * Created by Nnamdi on 3/22/2017.
 */
import { Component } from '@angular/core';

import { ListPage } from '../home-list/list';
import { MapPage } from '../home-map/map';
import { OptionsPage } from '../home-options/options';

@Component({
  selector: 'home-tabs',
  templateUrl: 'home-tabs.html'
})
export class HomeTabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
   mapRoot: any = MapPage;
  listRoot: any = ListPage;
  optionsRoot: any = OptionsPage;

  constructor() {

  }


}
