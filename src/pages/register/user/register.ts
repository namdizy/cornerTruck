import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../providers/services/authenticate.service';
import { TabsPage } from '../../tabs/user/tabs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  loading: any;
  alert: any;
  registerForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public formBuilder: FormBuilder, public auth: AuthService, public loadingCtrl: LoadingController) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      bio: ['', Validators.required],
      photo: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  register(){
    this.showLoaderCreatingAcc();
    this.auth.createAccount(this.registerForm.value)
      .then((res) =>{
        this.loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
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
