import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedeemPage } from './redeem';

@NgModule({
  declarations: [
    RedeemPage,
  ],
  imports: [
    IonicPageModule.forChild(RedeemPage),
  ],
  exports: [
    RedeemPage
  ]
})
export class RedeemPageModule {}
