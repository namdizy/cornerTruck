import { Component} from '@angular/core';

import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showList :boolean = false;
  items: string[];


  constructor(public navCtrl: NavController, private platform: Platform) {

  }
}
