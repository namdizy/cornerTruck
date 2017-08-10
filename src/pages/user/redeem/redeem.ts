import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../../providers/services/user.service';

@IonicPage()
@Component({
  selector: 'page-redeem',
  templateUrl: 'redeem.html',
})
export class RedeemPage {

  public notEnoughPoints = false;
  public availablePoints;
  public total = 0;
  public menu = [
    {
      name: 'Tacos',
      price:{dollar: 1.50,
              points: 15
            },
      description: 'This a test menu item',
      number: 0
    }, {
      name: 'Burritos',
      price:{dollar: 4.50,
        points: 45
      },
      description: 'This a test menu item',
      number: 0
    }, {
      name: 'Enchilada',
      price:{dollar: 6.00,
        points: 60
      },
      description: 'This a test menu item',
      number: 0
    }, {
      name: 'Wrap',
      price:{dollar: 10.00,
        points: 100
      },
      description: 'This a test menu item',
      number: 0
    },
    {
      name: 'Wrap',
      price:{dollar: 10.00,
        points: 100
      },
      description: 'This a test menu item',
      number: 0
    },
    {
      name: 'Wrap',
      price:{dollar: 10.00,
        points: 100
      },
      description: 'This a test menu item',
      number: 0
    },
    {
      name: 'Wrap',
      price:{dollar: 10.00,
        points: 100
      },
      description: 'This a test menu item',
      number: 0
    },
    {
      name: 'Wrap',
      price:{dollar: 10.00,
        points: 100
      },
      description: 'This a test menu item',
      number: 0
    },
    {
      name: 'Wrap',
      price:{dollar: 10.00,
        points: 100
      },
      description: 'This a test menu item',
      number: 0
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    this.availablePoints = userService.getUserPoints();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedeemPage');
  }

  remove(menuItem){
    if(menuItem.number >0){
      -- menuItem.number;
      this.total= this.total - menuItem.price.points
    }

  }

  add(menuItem) {

    if (this.availablePoints >= this.total+ menuItem.price.points) {
      ++menuItem.number;
      this.total = this.total + menuItem.price.points;
    }
    else{
      this.notEnoughPoints = true;
    }

  }

  redeemPoints(){
    console.log("redeem points click 111111111 ");
    let userItems: any[] = [];
    for(let m of this.menu){
      if(m.number > 0){
        userItems.push(m);
      }
    }

    this.userService.setUserItems(userItems);
    console.log("redeem points click");
    this.navCtrl.pop();
  }
}
