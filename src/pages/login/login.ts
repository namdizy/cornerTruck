import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterPage } from '../register/register';
import { AuthService } from '../../providers/services/authenticate.service';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: any;
  loginForm: FormGroup;
  erroMsg: any
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder, public auth: AuthService, public loadingCtrl: LoadingController) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

  login() {
    this.showLoader();
    this.auth.login(this.loginForm.value)
      .then((res) =>{
        this.loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
      })
      .catch((error) =>{
        this.loading.dismiss();
        this.erroMsg ="Incorrect password/username"
      });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Logging In...'
    });

    this.loading.present();

  }

}
