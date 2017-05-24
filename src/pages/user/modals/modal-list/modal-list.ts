import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { PlacesService } from '../../../../providers/services/places.service';


@Component({
  selector: 'page-modal-list',
  templateUrl: 'src/pages/user/modals/modal-list/modal-list.html'
})
export class ModalListPage {
  places: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public placesService: PlacesService,
              public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    this.places = this.placesService.getPlaces();
    console.log(this.places);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
