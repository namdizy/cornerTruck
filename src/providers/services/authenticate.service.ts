import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public token: any;

  constructor(public http: Http, public storage: Storage) {}

  checkAuthentication(){
    return tokenNotExpired('ct-token');
  }

  createAccount(details){

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('', JSON.stringify(details), {headers: headers})
        .subscribe(res => {

          let data = res.json();
          this.token = data.token;
          this.storage.set('ct-token', data.token);
          resolve(data);

        }, (err) => {
          reject(err);
        });

    });

  }

  login(credentials){

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {

          let data = res.json();
          this.token = data.token;
          this.storage.set('ct-token', data.token);
          resolve(data);

          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });

  }

  logout(){
    this.storage.set('ct-token', '');
  }

}
