/**
 * Created by Nnamdi on 5/24/2017.
 */
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


import { AboutPage } from './about/about';
import { PrivacyPage } from './privacy/privacy';
import { ChangePasswordPage } from './change-password/change-password';
import { FeedbackPage } from './feedback/feedback';

@Component({
  selector: 'ct-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController){

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  goToAbout(){
    this.navCtrl.push(AboutPage);
  }
  goToPrivacy(){
    this.navCtrl.push(PrivacyPage);
  }
  goToChangePassword(){
    this.navCtrl.push(ChangePasswordPage);
  }
  goToFeedback(){
    this.navCtrl.push(FeedbackPage);
  }
}
