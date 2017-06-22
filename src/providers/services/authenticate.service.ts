import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  //DB_URL: string = "http://10.0.2.2:3000/auth/";
  DB_URL: string = "http://192.168.0.2:3000/auth/";
  //DB_URL: string = "http://172.31.99.96:3000/auth/";
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

  createTruck(details){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.DB_URL + 'signup/foodTruck', details, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError)
  }

  login(credentials){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.DB_URL+'login', credentials, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

  foodTruckLogin(credentials){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.DB_URL+ 'login/foodTruck', credentials, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError)
  }

  extractData(res: Response){
    let body = res.json();
    console.log(body.token);
    return body.token || { };
  }

  private handleError (error: Response | any) {
    /*TODO use a remote logging infrastructure*/
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
  logout(){
    this.storage.set('ct-token', '');
  }

}
