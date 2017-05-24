import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { Popover } from '../../../components/popover/popover';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(Popover);

    popover.present({
      ev: ev
    });
  }

  checkins(){

  }

  pins(){

  }

  reviews(){

  }
}
