import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  @ViewChild('searchBar') searchbar;
  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {}

  ionViewDidEnter(){
    setTimeout(() => {
      this.keyboard.show(); // for android
      this.searchbar.setFocus();
    },150); //a least 150ms.
  }

}
