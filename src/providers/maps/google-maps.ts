/**
 * Created by Nnamdi on 3/15/2017.
 */
import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { Events } from 'ionic-angular';
import { YelpService } from '../../providers/services/yelp.service';

declare var google;

@Injectable()
export class GoogleMaps{
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  markers: any = [];
  places: any = [];

  constructor(private events: Events, public yelpService: YelpService){}

  init(mapElement: any, pleaseConnect: any){
    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;

    this.loadGoogleMaps();
  }

  loadGoogleMaps(){
    this.events.subscribe('network:connected', (status) => {
      if (!status) {
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
      let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: location,
        zoom: 15,
        scrollwheel: false,
        mapTypeControlOptions: {
          mapTypeIds: []
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement, mapOptions);
      this.addMarker(position.coords.latitude, position.coords.longitude);

      var request = {
        latitude: position.coords.latitude.toString(),
        longitude: position.coords.longitude.toString(),
        radius: '500',
        types: ['food', 'truck']
      };

      this.yelpService.findPlaces(request).subscribe(data => {
          this.places = data;
          console.log(data);
          this.mapPlaces(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Places Search Complete')
      );
    });
  }

  mapPlaces(data: any): void{
    if(data.length > 0){
      for(let i = 0; i<data.length; i++){
        let place = data[i];
        this.addMarker(place.coordinates.latitude, place.coordinates.longitude);
      }
    }
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
