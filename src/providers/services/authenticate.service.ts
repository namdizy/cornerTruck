import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  public token: any;
  DB_URL: string = "http://10.0.2.2:3000/auth/";
  //DB_URL: string = 'http://localhost:3000/auth/';

  constructor(public http: Http, public storage: Storage) {}

  checkAuthentication(){
    return tokenNotExpired('ct-token');
  }

  createAccount(details){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.DB_URL+ 'signup', details, options)
                .toPromise()
                .then(this.extractData)
                .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  login(credentials){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.DB_URL+'login', credentials, options)
                .toPromise()
                .then(this.extractData)
                .catch((error: any) => Observable.throw(error || 'Server error'));
    }

  extractData(res: Response){
    let data = res.json();
    this.token = data.token;
    this.storage.set('ct-token', data.token);
  }
  logout(){
    this.storage.set('ct-token', '');
  }

}
