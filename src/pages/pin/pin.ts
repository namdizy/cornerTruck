import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PinPinPage } from '../pin/pin-pin/pin-pin';
import { CheckInPage } from '../pin/check-in/check-in';

@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html'
})
export class PinPage {

  pinPage: any = PinPinPage;
  checkInPage: any = CheckInPage;

  constructor(public navCtrl: NavController) {

  }

}
