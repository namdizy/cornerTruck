/**
 * Created by Nnamdi on 5/24/2017.
 */
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'profile-edit',
  templateUrl: 'profile-edit.html'
})
export class ProfileEditPage {

  constructor(public viewCtrl: ViewController){

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
