/**
 * Created by Nnamdi on 5/25/2017.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'ct-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  feedbackForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public loadingCtrl: LoadingController){
    this.feedbackForm = this.formBuilder.group({
      subject: ['', Validators.required],
      issue: ['', Validators.required]
    });
  }

}
