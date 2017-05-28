/**
 * Created by Nnamdi on 5/25/2017.
 */

import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'ct-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public viewCtrl: ViewController){

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
