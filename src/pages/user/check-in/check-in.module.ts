import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {CheckInPage} from "./check-in";
import { QRCodeModule } from 'angular2-qrcode';



@NgModule({
  declarations: [
    CheckInPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckInPage),
    QRCodeModule
  ],
  exports: [
    CheckInPage
  ]
})
export class CheckInModule {}
