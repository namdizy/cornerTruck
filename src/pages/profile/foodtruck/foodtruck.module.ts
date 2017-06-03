import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Foodtruck } from './foodtruck';

@NgModule({
  declarations: [
    Foodtruck,
  ],
  imports: [
    IonicPageModule.forChild(Foodtruck),
  ],
  exports: [
    Foodtruck
  ]
})
export class FoodtruckModule {}
