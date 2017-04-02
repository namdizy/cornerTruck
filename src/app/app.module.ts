import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';

import { MyApp } from './app.component';

import {TrendingPage} from '../pages/trending/trending';
import { PinPage } from '../pages/pin/pin';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { ModalListPage } from '../pages/modal-list/modal-list'
import { ModalFilterPage } from '../pages/modal-filter/modal-filter'

import { Connectivity } from '../providers/connectivity';
import { GoogleMaps } from '../providers/maps/google-maps'
import { YelpService } from '../providers/services/yelp.service';
import { PlacesService } from '../providers/services/places.service';



@NgModule({
  declarations: [
    MyApp,
    TrendingPage,
    PinPage,
    ProfilePage,
    HomePage,
    TabsPage,
    ModalListPage,
    ModalFilterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    TrendingPage,
    PinPage,
    HomePage,
    TabsPage,
    ModalListPage,
    ModalFilterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Connectivity,
    GoogleMaps, YelpService, PlacesService ]
})
export class AppModule {}
