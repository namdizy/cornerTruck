import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMenu } from './edit-menu';

@NgModule({
  declarations: [
    EditMenu,
  ],
  imports: [
    IonicPageModule.forChild(EditMenu),
  ],
  exports: [
    EditMenu
  ]
})
export class EditMenuModule {}
