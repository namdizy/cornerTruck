import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { QRCodeModule } from 'angular2-qrcode';
import { Autosize } from 'ionic2-autosize'

import { MyApp } from './app.component';

import { TrendingPage } from '../pages/user/trending/trending';
import { PinPage } from '../pages/user/pin/pin';
import { HomePage } from '../pages/user/home/home';
import { TabsPage } from '../pages/tabs/user/tabs';
import { ProfilePage } from '../pages/user/profile/profile';
import { ModalListPage } from '../pages/user/modals/modal-list/modal-list';
import { ModalFilterPage } from '../pages/user/modals/modal-filter/modal-filter';
import { SearchPage } from '../pages/user/search/search';
import { PinPinPage } from '../pages/user/pin/pin-pin/pin-pin';
import { CheckInPage } from '../pages/user/pin/check-in/check-in';
import { FoodTruckProfilePage } from '../pages/foodtruck/profile/foodTruckProfile';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { Popover } from '../components/popover/popover';


import { Connectivity } from '../providers/connectivity';
import { GoogleMaps } from '../providers/maps/google-maps'
import { YelpService } from '../providers/services/yelp.service';
import { PlacesService } from '../providers/services/places.service';
import { AuthService } from '../providers/services/authenticate.service'

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
    SearchPage,
    PinPinPage,
    CheckInPage,
    FoodTruckProfilePage,
    LoginPage,
    RegisterPage,
    Autosize,
    Popover
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    JsonpModule,
    Ng2OrderModule,
    MaterialModule,
    QRCodeModule,
    BrowserModule,
    BrowserAnimationsModule
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
    SearchPage,
    PinPinPage,
    CheckInPage,
    FoodTruckProfilePage,
    LoginPage,
    RegisterPage,
    Popover
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Connectivity,
    GoogleMaps, YelpService, PlacesService, AuthService ]
})
export class AppModule {}
