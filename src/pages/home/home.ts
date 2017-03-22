import { Component, ViewChild, ElementRef  } from '@angular/core';
import {Platform} from 'ionic-angular';
import { GoogleMaps } from '../../providers/maps/google-maps';

import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showList :boolean = false;
  items: string[];

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController, private events: Events, private platform: Platform, private maps: GoogleMaps) {
    this.events.subscribe('test', (status) =>{
      console.log(status);
    });

    this.events.subscribe('network:connected', (status) => {
      console.log(status);
    });

    this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement)
  }

}
