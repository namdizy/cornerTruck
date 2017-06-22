/**
 * Created by Nnamdi on 6/3/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {DateFormatter} from "@angular/common/src/pipes/intl";

@Component({
  selector: 'page-foodtruck-settings-profile',
  templateUrl: 'profile.html',
  providers: [Camera]
})
export class FoodTruckProfileSettingsPage {
  public currentImageRef: any;
  public base64Image: string;
  //DB_URL: string = "http://172.31.99.96:3000/api";
  DB_URL: string = "http://192.168.0.2:3000/api";

  promotion: any = {
    title: '',
    images: [],
    description: ''
  };
  open: boolean = false;
  useCurrentLocation: boolean = true;
  location: any ={
    geometry: {},
    address: {}
  };

  states: any = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
    "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX",
    "UT", "VT", "VA", "WA", "WV", "WI", "WY"];


  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController,
              private camera: Camera, public http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodTruckProfilePage');
  }

  addMenu(){
    this.navCtrl.push('AddMenu');
  }

  presentActionSheet(el: any){
    this.currentImageRef = el;

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons:[
        {
          text: 'Load from library',
          handler: ()=>{
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: ()=>{
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Delete Image',
          handler: ()=>{
            this.removeImage(el);
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
  takePicture(sourceType: any){
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

      let options = {
        fileKey: "file",
        fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
        chunkedMode: false,
        mimeType: "image/jpg"
      };
      
      this.http.post(this.DB_URL+'/upload', {file: this.base64Image}, options)
        .toPromise()
        .then((res: Response)=>{
          console.log(res)
        })
        .catch();

      this.currentImageRef.src = this.base64Image;
      this.promotion.images.push(this.base64Image);

    }, (err) => {
      // Handle error
      console.log(err);
    });
  }
  removeImage(el: any){

  }
  goToMenuDetails(){
    this.navCtrl.push("EditMenu");
  }
}
