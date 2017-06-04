/**
 * Created by Nnamdi on 6/3/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-foodtruck-feed',
  templateUrl: 'feed.html'
})
export class FoodTruckFeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodTruck Feed Page');
  }
}
