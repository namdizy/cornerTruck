import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from '../../../providers/services/authenticate.service';
import { CustomValidators } from '../../../providers/validator/CustomValidators';
import { FoodTruck } from '../../../providers/interfaces/foodtruck';

import { FoodTruckTabsPage } from '../../tabs/foodtruck/tabs';

@Component({
  selector: 'page-foodtruck-register',
  templateUrl: 'register.html',
})
export class RegisterFoodtruck {

  foodtruck : FoodTruck;
  foodTruckForm: FormGroup;
  loading: any;
  alert: any;

  states: any = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
    "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX",
    "UT", "VT", "VA", "WA", "WV", "WI", "WY"];


  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
              public alertCtrl: AlertController, public loadingCtrl: LoadingController, public auth: AuthService) {

    this.foodtruck = {
      name: '',
      username: '',
      password: '',
      profilePicture: '',
      phoneNumber: '',
      address: {},
      email: '',
      summary: '',
      location: {}
    };

    this.foodTruckForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      passwords: this.formBuilder.group({
        password: ['', Validators.required],
        repeat: ['', Validators.required]
      }),
      profilePicture: [''],
      phoneNumber: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        zip: [''],
        state: ['']
      }),
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      summary: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  register(){
    console.log(this.foodTruckForm);

    this.showLoaderCreatingAcc();
    this.auth.createAccount(this.foodTruckForm.value)
      .then((res) =>{
        this.loading.dismiss();
        this.navCtrl.setRoot(FoodTruckTabsPage);
      })
      .catch((error) =>{
        this.loading.dismiss();
        this.showAlert(error);
        this.alert.present();
      });
  }

  showLoaderCreatingAcc(){

    this.loading = this.loadingCtrl.create({
      content: 'Creating account...'
    });

    this.loading.present();
  }

  showAlert(error) {
    this.alert = this.alertCtrl.create({
      title: 'Error creating account',
      subTitle: 'There was an error when creating your account. Please try again.' + error,
      buttons: ['OK']
    });
  }
}
