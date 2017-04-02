/**
 * Created by Nnamdi on 4/2/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class PlacesService{
  places: any;

  constructor(){}
  setPlaces(data) :void{
    this.places = data;
    console.log("set places in places service");
  }

  getPlaces(): any{
    console.log("get places in places service");
    return this.places;
  }
}
