/**
 * Created by Nnamdi on 6/3/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-foodtruck-settings-profile',
  templateUrl: 'profile.html'
})
export class FoodTruckProfileSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodTruckProfilePage');
  }

  addMenu(){
    this.navCtrl.push('AddMenu');
  }
}
