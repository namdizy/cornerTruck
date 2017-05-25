import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../../pages/user/settings/settings';
import { ProfileEditPage } from '../../pages/user/profile-edit/profile-edit';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class Popover {
  constructor(public navCTRL: NavController) {}

  editProfile(){
    console.log("edit profile was clicked");
    this.navCTRL.push(ProfileEditPage);

  }
  settings(){
    console.log("settings was clicked");
    this.navCTRL.push(SettingsPage);
  }

}
