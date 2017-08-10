import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../../providers/services/user.service';


@IonicPage()
@Component({
  selector: 'page-check-in',
  templateUrl: 'check-in.html',
})
export class CheckInPage {
  points = 0;
  qrcode: string;
  codeGenerated: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService : UserService) {
    this.generateUserPoints();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckInPage');
  }

  generateUserPoints(){
    this.points = Math.floor((Math.random() * 100) + 1);
    this.userService.setUserPoints(this.points);
  }
  generateQRCode(){
    this.qrcode = "this is a test";
    this.codeGenerated = true;
  }

  redeem(){
    this.navCtrl.push("RedeemPage");
    //console.log("redeem called");
    //this.modalCtrl.create(RedeemPage);
  }
}
