import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { MyApp } from './app.component';

import {TrendingPage} from '../pages/trending/trending';
import { PinPage } from '../pages/pin/pin';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { ModalListPage } from '../pages/modals/modal-list/modal-list';
import { ModalFilterPage } from '../pages/modals/modal-filter/modal-filter';
import { SearchPage } from '../pages/search/search';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { Connectivity } from '../providers/connectivity';
import { GoogleMaps } from '../providers/maps/google-maps'
import { YelpService } from '../providers/services/yelp.service';
import { PlacesService } from '../providers/services/places.service';


//import { OrderBy } from '../providers/pipes/orderby';



@NgModule({
  declarations: [
    MyApp,
    TrendingPage,
    PinPage,
    ProfilePage,
    HomePage,
    TabsPage,
    ModalListPage,
    ModalFilterPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule,
    Ng2OrderModule,
    MaterialModule
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
    ModalFilterPage,
    SearchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Connectivity,
    GoogleMaps, YelpService, PlacesService ]
})
export class AppModule {}
