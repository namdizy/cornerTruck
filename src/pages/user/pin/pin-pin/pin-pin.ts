import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-pin-pin',
  templateUrl: 'pin-pin.html',
  providers: [Camera]

})
export class PinPinPage {
  public base64Image: string;
  public currentImageRef: any;
  location: boolean = true;

  imageCard1_image: boolean= true;
  imageCard2_image: boolean= true;
  imageCard3_image: boolean= true;
  imageCard4_image: boolean= true;


  states: any = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
    "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX",
    "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

  foodTruckTypes: any = ["Mexican", "See food", "Chinese", "Thai", "Korean", "Japanese", "Icecream", "Special blend",
    "Hot dogs"];

  pinForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera,
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
      summary: ['', Validators.required],
      type: [[], Validators.required],
      recommend: [true, Validators.required]

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PinInPage');
  }

  upload(){
    console.log("upload!!");
  }
  presentActionSheet(el: any, event: any){
    this.currentImageRef = el;
    console.log(el.parentElement);

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons:[
        {
          text: 'Load from library',
          handler: ()=>{
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, event);
          }
        },
        {
          text: 'Use Camera',
          handler: ()=>{
            this.takePicture(this.camera.PictureSourceType.CAMERA, event);
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

  takePicture(sourceType: any, event: any){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.currentImageRef.src = this.base64Image;
      let tempString = event.target.id +'_image';
      if(tempString.includes('1')){
        this.imageCard1_image = false;
      }
      else if(tempString.includes('2')){
        this.imageCard2_image = false;
      }
      else if(tempString.includes('3')){
        this.imageCard3_image = false;
      }
      else if(tempString.includes('4')){
        this.imageCard4_image = false
      }

    }, (err) => {
      // Handle error
      console.log(err);
    });
  }
}
