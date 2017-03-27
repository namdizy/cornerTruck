import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-filter',
  templateUrl: 'modal-filter.html'
})
export class ModalFilterPage {

  mapDistance: any;
  hours: any = {
    'lower': 6,
    'upper': 10
  };
  cuisine: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public  viewCtrl: ViewController) {}

  ionViewDidLoad() {


    console.log('ionViewDidLoad ModalFilterPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  setHours(){
    console.log('change')
    console.log(this.hours);
  }

}
