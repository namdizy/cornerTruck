import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { RegisterPage } from '../register/user/register';
import { AuthService } from '../../providers/services/authenticate.service';
import { RegisterFoodtruck } from '../register/foodtruck/register';

import { TabsPage } from '../tabs/user/tabs';
import { FoodTruckTabsPage } from '../tabs/foodtruck/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: any;
  loginForm: FormGroup;
  loginTruckForm: FormGroup;
  erroMsg: any;
  loginSegment: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
              public formBuilder: FormBuilder, public auth: AuthService, public loadingCtrl: LoadingController) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginTruckForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginSegment = 'users';
  }

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

  goToRegisterTruckPage(){
    this.navCtrl.push(RegisterFoodtruck);
  }

  login() {
    this.showLoader();
    if(this.loginForm.value.username === null  || this.loginForm.value.password === null){
      this.erroMsg ="Please Enter password/username"
    }
    else{
      this.auth.login(this.loginForm.value)
        .then((res) =>{
          this.storage.set('ct-token', res)
          this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage);
        })
        .catch((error) =>{
          this.loading.dismiss();
          this.erroMsg ="Incorrect password/username"
        });
    }

  }

  foodTruckLogin(){
    this.showLoader();
    if(this.loginTruckForm.value.username === null || this.loginTruckForm.value.password === null){
      this.erroMsg ="Please Enter password/username";
    }
    else{
      this.auth.foodTruckLogin(this.loginTruckForm.value)
        .then((res) =>{
          this.storage.set('ct-token', res)
          this.loading.dismiss();
          this.navCtrl.setRoot(FoodTruckTabsPage);
        })
    }
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Logging In...'
    });

    this.loading.present();
  }

}
