import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { RegisterPage } from '../register/register';
import { AuthService } from '../../providers/services/authenticate.service';

import { TabsPage } from '../tabs/user/tabs';

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
    console.log("resgister function");
    this.navCtrl.push(RegisterPage);
  }

  login() {
    this.showLoader();
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

  loginTrucks(){
    this.navCtrl.setRoot(TabsPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Logging In...'
    });

    this.loading.present();
  }

}
