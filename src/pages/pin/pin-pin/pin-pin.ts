import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, File, Transfer, FilePath } from 'ionic-native'

@Component({
  selector: 'page-pin-pin',
  templateUrl: 'pin-pin.html'
})
export class PinPinPage {

  location: boolean = true;
  states: any = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
    "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX",
    "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

  pinForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder) {
    this.pinForm = this.formBuilder.group({
      location: [true, Validators.required],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        zip: [''],
        state: ['']
      }),
      name: ['', Validators.required],
      about: ['', Validators.required],
      recommend: ['', Validators.required]

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PinInPage');
  }

  presentActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons:[
        {
          text: 'Load from library',
          handler: ()=>{

          }
        },
        {
          text: 'Use Camera',
          handler: ()=>{

          }
        },
        {
          text: 'cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
}
