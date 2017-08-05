import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-check-in',
  templateUrl: 'check-in.html',
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

  redeem(){
    this.navCtrl.push("RedeemPage");
  }
}