/**
 * Created by Nnamdi on 3/15/2017.
 */
import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { Events, ModalController } from 'ionic-angular';
import { YelpService } from '../services/yelp.service';
import { PlacesService } from '../services/places.service';

declare let google;

@Injectable()
export class GoogleMaps{
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  markers: any = [];
  places: any = [];

  constructor(private events: Events, public yelpService: YelpService, public placesService: PlacesService, public modalCtrl: ModalController){}

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
        console.log("start map init loodgoogle maps")
        this.initMap().then(() => {
          this.enableMap();
        })
      }
    });
  }

  initMap(): Promise<any> {
    console.log("this is initmap");
    return Geolocation.getCurrentPosition().then((position) => {
      console.log("this is init map");
      this.mapInitialised = true;
      let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: location,
        zoom: 15,
        scrollwheel: true,
        mapTypeControlOptions: {
          mapTypeIds: []
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement, mapOptions);
      this.addMarker(position.coords.latitude, position.coords.longitude, {name: 'me!'});

      let request = {
        latitude: position.coords.latitude.toString(),
        longitude: position.coords.longitude.toString(),
        radius: '500',
        types: 'foodtrucks'
      };

      this.yelpService.findPlaces(request).subscribe(data => {
          this.places = data;
          this.placesService.setPlaces(data);
          this.mapPlaces(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Places Search Complete')
      );
    }).catch((err) =>{
      console.log(err);
    });
  }

  mapPlaces(data: any): void{
    if(data.length > 0){
      for(let i = 0; i<data.length; i++){
        let place = data[i];
        this.addMarker(place.coordinates.latitude, place.coordinates.longitude, data[i]);
      }
    }
  }

  disableMap(): void {
    if(this.pleaseConnect){
      this.mapElement.style.display = "none";
      this.pleaseConnect.style.display = "block";
    }
  }

  enableMap(): void {
    if(this.pleaseConnect){
      this.mapElement.style.display = "block";
      this.pleaseConnect.style.display = "none";
    }
  }

  addMarker(lat: number, lng: number, place: any): void {
    let latLng = new google.maps.LatLng(lat, lng);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng,
      title: place.name
    });

    let infoWindow = new google.maps.InfoWindow({
      content: '<div class="map-content" onClick="test()" style="background:white;opacity:0.8;"><h3>' + place.name + '</h3> <p style="color: #8e9093">'+place.distance*0.000621371 +'m away</p></div>'
    });

    marker.addListener('click', ()=> {
      infoWindow.open(this.map, marker);
      //let pageDetails = this.modalCtrl.create(ModalListPage);
      //pageDetails.present();
    });

    this.markers.push(marker);
  }
}
