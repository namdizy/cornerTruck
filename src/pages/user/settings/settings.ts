/**
 * Created by Nnamdi on 5/24/2017.
 */
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public viewCtrl: ViewController){

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
