/**
 * Created by Nnamdi on 3/15/2017.
 */
import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { Events } from 'ionic-angular'

declare const google;

@Injectable()
export class GoogleMaps{
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  markers: any = [];

  constructor(private events: Events){}

  init(mapElement: any, pleaseConnect: any){

    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;
    this.loadGoogleMaps();
  }

  loadGoogleMaps() {
    console.log("what what");
    this.events.subscribe('network:connected', (status) => {
      console.log('wowowowo');
      let connected = status[0] === true;
      if (!connected) {
        this.disableMap();
      }
      else {
        this.initMap().then(() => {
          this.enableMap();
        })
      }
    });
  }

  initMap(): Promise<any> {
    return Geolocation.getCurrentPosition().then((position) => {
      this.mapInitialised = true;
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement, mapOptions);
      this.addMarker(position.coords.latitude, position.coords.longitude);
    });
  }

  disableMap(): void {
    if(this.pleaseConnect){
      this.mapElement.style.display = "none"
      this.pleaseConnect.style.display = "block";
    }
  }

  enableMap(): void {
    if(this.pleaseConnect){
      this.mapElement.style.display = "block";
      this.pleaseConnect.style.display = "none";
    }
  }

  addMarker(lat: number, lng: number): void {
    let latLng = new google.maps.LatLng(lat, lng);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    this.markers.push(marker);
  }
}
