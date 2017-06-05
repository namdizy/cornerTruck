import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMenu } from './add-menu';

@NgModule({
  declarations: [
    AddMenu,
  ],
  imports: [
    IonicPageModule.forChild(AddMenu),
  ],
  exports: [
    AddMenu
  ]
})
export class AddMenuModule {}
