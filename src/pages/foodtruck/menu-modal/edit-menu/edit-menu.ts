import { Component } from '@angular/core';
import { NavController, NavParams, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-edit-menu',
  templateUrl: 'edit-menu.html',
})
export class EditMenu {

  public menuItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }

  ionViewWillEnter() {
    this.menuItem = this.navParams.get('menuItem');
    console.log(this.menuItem);
  }

  back(){
    this.navCtrl.pop();
  }

  save(){

  }

}
