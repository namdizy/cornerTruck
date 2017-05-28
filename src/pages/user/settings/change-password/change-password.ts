/**
 * Created by Nnamdi on 5/25/2017.
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'ct-change-password',
  templateUrl: 'change-password.html'
})
export class ChangePasswordPage {
  passwordForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public loadingCtrl: LoadingController){
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPasswordRetype: ['', Validators.required]
    });
  }

}
