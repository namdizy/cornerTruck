import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-foodtruck',
  templateUrl: 'foodtruck.html',
})
export class Foodtruck {
  public truck: any;
  public items: any;
  public map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items[i] = {
        'name': i
      }
    }
  }

  ionViewWillEnter() {

    this.truck = this.navParams.get('truck');
    this.initializeMap();
  }

  range(n) {
    return new Array(Math.round(n));
  }


  reviewTruck(){

  }

  initializeMap() {
    let latLng = new google.maps.LatLng(this.truck.coordinates.latitude, this.truck.coordinates.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }

    this.map = new google.maps.Map(document.getElementById("map-detail"), mapOptions);
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

  }

}
