import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'page-modal-filter',
  templateUrl: 'src/pages/user/modals/modal-filter/modal-filter.html'
})
export class ModalFilterPage {

  filterForm: FormGroup;
  foodTruckTypes: any = ["Mexican", "See food", "Chinese", "Thai", "Korean", "Japanese", "Icecream", "Special blend",
    "Hot dogs"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public  viewCtrl: ViewController,
              public formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      distance: [''],
      open: [true ],
      rating: [''],
      type: [[]],
      verified: [true]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFilterPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
