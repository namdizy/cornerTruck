import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-menu',
  templateUrl: 'add-menu.html',
})
export class AddMenu {

  menuItem: any = {
    segment: '',
    description: '',
    name: '',
    price: {
      dollars: '',
      points: ''
    }
  };

  segmentModel: any;
  segmentsList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {

  }

  save(){
    this.viewCtrl.dismiss({menuItem: this.menuItem, segmentList: this.segmentsList });
  }
  back(){
    this.navCtrl.pop();
  }

  addToSegmentList(){
    if(this.segmentModel !== null && this.segmentModel !== ""){
      this.segmentsList.push(this.segmentModel);
      this.segmentModel = "";
    }
  }

}
