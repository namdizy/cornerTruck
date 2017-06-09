import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-menu',
  templateUrl: 'add-menu.html',
})
export class AddMenu {

  menuItem: any = {
    segment: '',
    description: '',
    name: ''
  };

  segmentModel: any;
  segmentsList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMenu');
  }

  save(){
    
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
