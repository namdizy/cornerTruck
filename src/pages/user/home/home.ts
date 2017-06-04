import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { GoogleMaps } from '../../../providers/maps/google-maps';
import { ModalListPage } from '../modals/list/modal-list';
import { ModalFilterPage } from '../modals/filter/modal-filter';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showList :boolean = false;
  items: string[];

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController, public maps: GoogleMaps, public modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.maps.start(this.mapElement.nativeElement, this.pleaseConnect.nativeElement)
  }

  loadListModal(){
    let listModal = this.modalCtrl.create(ModalListPage, null, {showBackdrop: true, enableBackdropDismiss: true});
    listModal.present();
  }

  loadFilterModal(){
    let filterModal = this.modalCtrl.create(ModalFilterPage, null, {showBackdrop: true, enableBackdropDismiss: true});
    filterModal.present();
  }

  loadSearch(){
    this.navCtrl.push(SearchPage);
  }
}
