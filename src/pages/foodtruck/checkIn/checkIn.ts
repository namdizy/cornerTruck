/**
 * Created by Nnamdi on 8/21/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-foodtruck-checkIn',
  templateUrl: 'checkIn.html'
})
export class FoodTruckCheckInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodTruckCheckInPage');
  }

  scan(){
    console.log("scan function")
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);

    }, (err) => {
      // An error occurred
    });
  }


}
