import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import {TrendingPage} from '../pages/trending/trending';
import { PinPage } from '../pages/pin/pin';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { ListPage } from '../pages/home-list/list';
import { MapPage } from '../pages/home-map/map';
import { OptionsPage } from '../pages/home-options/options';

@NgModule({
  declarations: [
    MyApp,
    TrendingPage,
    PinPage,
    ProfilePage,
    HomePage,
    TabsPage,
    HomeTabsPage,
    ListPage,
    MapPage,
    OptionsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    TrendingPage,
    PinPage,
    HomePage,
    TabsPage,
    HomeTabsPage,
    ListPage,
    MapPage,
    OptionsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
