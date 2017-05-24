import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-check-in',
  templateUrl: 'src/pages/user/pin/check-in/check-in.html',
})
export class CheckInPage {
  qrcode: string;
  codeGenerated: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckInPage');
  }

  generateQRCode(){
    this.qrcode = "this is a test";
    this.codeGenerated = true;
  }

}
