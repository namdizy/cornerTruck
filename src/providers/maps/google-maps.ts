/**
 * Created by Nnamdi on 3/15/2017.
 */
import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { Events } from 'ionic-angular'

declare var google;

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

  loadGoogleMaps(){
    this.events.subscribe('network:connected', (status) => {
      console.log('in here')

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
        location: location,
        radius: '500',
        types: ['food truck']
      };

      // Create the PlaceService and send the request.
      // Handle the callback with an anonymous function.
      var service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch(request, (results, status) =>{
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            // If the request succeeds, draw the place location on
            // the map as a marker, and register an event to handle a
            // click on the marker.
            var marker = new google.maps.Marker({
              map: this.map,
              position: place.geometry.location
            });
          }
        }
      });


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
