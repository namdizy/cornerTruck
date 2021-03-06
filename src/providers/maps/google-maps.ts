/**
 * Created by Nnamdi on 3/15/2017.
 */
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Events, ModalController } from 'ionic-angular';
import { YelpService } from '../services/yelp.service';
import { PlacesService } from '../services/places.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

declare let google;

@Injectable()
export class GoogleMaps{
  url: string;
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  markers: any = [];
  places: any = [];

  constructor(private events: Events, public yelpService: YelpService, public placesService: PlacesService,
              public modalCtrl: ModalController, public http: Http, public geolocation: Geolocation){}

  start(mapElement: any, pleaseConnect: any){
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
    return this.geolocation.getCurrentPosition().then((position) => {
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
      this.addMarker(position.coords.latitude, position.coords.longitude, {name: 'me!', distance: 0});

      let request = {
        latitude: position.coords.latitude.toString(),
        longitude: position.coords.longitude.toString(),
        radius: '10000',
        types: 'foodtrucks'
      };

      this.yelpService.findPlaces(request).subscribe(data => {
          this.places = data;
          this.placesService.setPlaces(data);
          console.log("google maps services");
          console.log(this.places);
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


    let tempNum = place.distance*0.000621371;
    let distance = parseFloat(tempNum.toString()).toFixed(2);
    var boxText = document.createElement("div");
    //boxText.style.cssText = "border: 1px solid black; margin-top: 8px; background: yellow; padding: 5px;";
    boxText.innerHTML = '<div  class="row info-box-wrap">'+
         '<div class="info-box-text-wrap">'+
            '<h6 class="name">'+place.name+'</h6>'+
            '<p class="address">7010 Sepulveda BLVD Van Nuys California</p>'+
            '<p class="distance">'+distance+'m</p>'+
            '<p class="open">open</p>'+
         '</div>'+
    '</div>';

    boxText.addEventListener('click', ()=>{
      console.log('clicked!!');
    });

    var infowindow = new google.maps.InfoWindow({
      content: boxText,

    });

    marker.addListener('click', ()=> {
      infowindow.close();
      infowindow.open(this.map, marker);

    });

    this.markers.push(marker);
  }

  getLocation(address) :Observable<any>{
    console.log(address);
    this.url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address.street+', '+address.city;
    return this.http.get(this.url).map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
