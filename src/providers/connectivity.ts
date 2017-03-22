/**
 * Created by Nnamdi on 3/21/2017.
 */

import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network } from "ionic-native"

declare let Connection;

@Injectable()
export class Connectivity {
  onDevice: boolean = false;
  constructor(public events: Events){

  }

  isOnline(): void {
    if(this.onDevice && Network.type){
      this.events.publish('network:connected', Network.type !== Connection.NONE);
    } else {
      this.events.publish('network:connected', navigator.onLine);
    }
  }

  watchForNetworkChanges(): void {
    // Watch network for a connection
    Network.onConnect().subscribe(() => {
      this.events.publish('network:connected', true);
    });

    Network.onDisconnect().subscribe(() => {
      this.events.publish('network:connected', false);
    });
  }
}
