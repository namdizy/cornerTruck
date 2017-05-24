import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/user/tabs';
import { AuthService } from '../providers/services/authenticate.service';
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, public auth: AuthService) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      if(auth.checkAuthentication()){
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
    });
  }
}
