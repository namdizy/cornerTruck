import { Component } from '@angular/core';
import { NavController, NavParams, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-edit-menu',
  templateUrl: 'edit-menu.html',
})
export class EditMenu {

  public menuItem: any = {};
  public segments: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.menuItem = this.navParams.get('menu');
    this.segments = this.navParams.get('segments');
  }

  back(){
    this.navCtrl.pop();
  }

  save(){
    this.viewCtrl.dismiss(this.menuItem);
  }

}
