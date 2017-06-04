/**
 * Created by Nnamdi on 6/3/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FoodTruckProfileSettingsPage } from './profile/profile';
import { FoodTruckAccountSettingsPage } from './account/account';

@Component({
  selector: 'page-foodtruck-settings',
  templateUrl: 'settings.html'
})
export class FoodTruckSettingsPage{

  accountRoot: any = FoodTruckAccountSettingsPage;
  profileRoot: any = FoodTruckProfileSettingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodSettingsPage');
  }

}
