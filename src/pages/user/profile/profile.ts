import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Popover } from '../../../components/popover/popover';
import { JwtHelper } from 'angular2-jwt'


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  jwtHelper: JwtHelper = new JwtHelper();
  tokenTest: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private popoverCtrl: PopoverController, public storage: Storage) {

  }

  ionViewWillEnter(){
    this.storage.get('ct-token').then((value) => {
      console.log(value);
      console.log(this.jwtHelper.decodeToken(value));
    });
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(Popover);

    popover.present({
      ev: ev
    });
  }

  checkins() {

  }

  pins() {

  }

  reviews() {

  }

}
