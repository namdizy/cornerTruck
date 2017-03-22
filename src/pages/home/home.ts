import { Component, ViewChild, ElementRef} from '@angular/core';
import { GoogleMaps } from '../../providers/maps/google-maps';

import { NavController, Events, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showList :boolean = false;
  items: string[];
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController, private platform: Platform,
              private maps: GoogleMaps) {

  }

  ionViewDidLoad(){
    this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement)
  }

}
