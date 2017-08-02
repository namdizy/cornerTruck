/**
 * Created by Nnamdi on 3/21/2017.
 */

import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

declare let Connection;

@Injectable()
export class Connectivity {
  onDevice: boolean = false;
  constructor(public events: Events, public network: Network){

  }

  isOnline(): void {
    console.log('connectivity service');
    if(this.onDevice && this.network.type){
      console.log("connected!");
      this.events.publish('network:connected', this.network.type !== Connection.NONE);
    } else {
      console.log('else in connection');
      this.events.publish('network:connected', navigator.onLine);
    }
  }

  watchForNetworkChanges(): void {
    // Watch network for a connection
    this.network.onConnect().subscribe(() => {
      this.events.publish('network:connected', true);
    });

    this.network.onDisconnect().subscribe(() => {
      this.events.publish('network:connected', false);
    });
  }
}
