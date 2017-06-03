import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-foodtruck',
  templateUrl: 'foodtruck.html',
})
export class Foodtruck {
  truck: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {

    this.truck = this.navParams.get('truck');
    console.log('this is the truck', this.truck);
  }

}
