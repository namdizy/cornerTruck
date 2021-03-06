import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Network } from '@ionic-native/network';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Autosize } from 'ionic2-autosize'
import { EqualTextValidator } from 'angular2-text-equality-validator';

import { MyApp } from './app.component';

import { TrendingPage } from '../pages/user/trending/trending';
import { PinPage } from '../pages/user/pin/pin';
import { HomePage } from '../pages/user/home/home';
import { TabsPage } from '../pages/tabs/user/tabs';
import { ProfilePage } from '../pages/user/profile/profile';
import { SearchPage } from '../pages/user/search/search';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/user/register';
import { RegisterFoodtruck } from '../pages/register/foodtruck/register';

import { FoodTruckTabsPage } from '../pages/tabs/foodtruck/tabs';
import { FoodTruckProfilePage } from '../pages/foodtruck/profile/profile'
import { FoodTruckSettingsPage } from '../pages/foodtruck/settings/settings';
import { FoodTruckFeedPage } from '../pages/foodtruck/feed/feed';
import { FoodTruckCheckInPage } from '../pages/foodtruck/checkIn/checkIn';
import { FoodTruckProfileSettingsPage } from '../pages/foodtruck/settings/profile/profile';
import { FoodTruckAccountSettingsPage } from '../pages/foodtruck/settings/account/account';

import { ModalListPage } from '../pages/user/modals/list/modal-list';
import { ModalFilterPage } from '../pages/user/modals/filter/modal-filter';
import { ProfileEditPage } from '../pages/user/profile-edit/profile-edit';
import { SettingsPage } from '../pages/user/settings/settings';
import { AboutPage } from '../pages/user/settings/about/about';
import { PrivacyPage } from '../pages/user/settings/privacy/privacy';
import { ChangePasswordPage } from '../pages/user/settings/change-password/change-password';
import { FeedbackPage } from '../pages/user/settings/feedback/feedback';
import { Popover } from '../components/popover/popover';

import { AddMenu } from '../pages/foodtruck/menu-modal/add-menu/add-menu';
import { EditMenu } from '../pages/foodtruck/menu-modal/edit-menu/edit-menu';

import { Connectivity } from '../providers/connectivity';
import { GoogleMaps } from '../providers/maps/google-maps'
import { YelpService } from '../providers/services/yelp.service';
import { PlacesService } from '../providers/services/places.service';
import { AuthService } from '../providers/services/authenticate.service';
import { UserService } from '../providers/services/user.service';

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
    FoodTruckProfilePage,
    LoginPage,
    RegisterPage,
    Autosize,
    EqualTextValidator,
    Popover,
    SettingsPage,
    ProfileEditPage,
    AboutPage,
    PrivacyPage,
    ChangePasswordPage,
    FeedbackPage,
    RegisterFoodtruck,
    FoodTruckTabsPage,
    FoodTruckSettingsPage,
    FoodTruckFeedPage,
    FoodTruckCheckInPage,
    FoodTruckProfileSettingsPage,
    FoodTruckAccountSettingsPage,
    AddMenu,
    EditMenu
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    JsonpModule,
    Ng2OrderModule,
    MaterialModule,

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
    FoodTruckProfilePage,
    LoginPage,
    RegisterPage,
    Popover,
    ProfileEditPage,
    SettingsPage,
    AboutPage,
    PrivacyPage,
    ChangePasswordPage,
    FeedbackPage,
    RegisterFoodtruck,
    FoodTruckTabsPage,
    FoodTruckSettingsPage,
    FoodTruckFeedPage,
    FoodTruckCheckInPage,
    FoodTruckProfileSettingsPage,
    FoodTruckAccountSettingsPage,
    AddMenu,
    EditMenu
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Connectivity, Keyboard, Geolocation, UserService,
    GoogleMaps, YelpService, PlacesService, AuthService, StatusBar, SplashScreen, Camera, BarcodeScanner, Network ]
})
export class AppModule {}
