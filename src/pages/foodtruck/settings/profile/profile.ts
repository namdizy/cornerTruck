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

  promotion: any = {
    title: '',
    images: [],
    description: ''
  };
  open: boolean = false;
  useCurrentLocation: boolean = true;
  location: any ={
    geometry: {},
    address: {}
  };

  states: any = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
    "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX",
    "UT", "VT", "VA", "WA", "WV", "WI", "WY"];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodTruckProfilePage');
  }

  addMenu(){
    this.navCtrl.push('AddMenu');
  }

  addImage(){

  }

  goToMenuDetails(){
    this.navCtrl.push("EditMenu");
  }
}
