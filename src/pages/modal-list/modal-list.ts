import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-list',
  templateUrl: 'modal-list.html'
})
export class ModalListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalListPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
