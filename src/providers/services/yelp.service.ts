/**
 * Created by Nnamdi on 3/29/2017.
 */
import { Injectable} from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class YelpService{
  //DB_URL: string = "http://10.0.2.2:3000/api/places";
  //DB_URL: string = "http://192.168.1.133:3000/api/places";
  //DB_URL: string = "http://10.0.3.177:3000/api/places";
  //DB_URL: string = "http://10.0.3.204:3000/api/places";
  DB_URL: string = "http://172.31.99.96:3000/api/places"
  //DB_URL: string = "http://localhost:3000/api/places";
  constructor(private http: Http){}

  findPlaces(req): Observable<any>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('longitude', req.longitude);
    params.set('latitude', req.latitude);
    params.set('radius', req.radius);
    params.set('types', req.types);

    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this.http.get(this.DB_URL, requestOptions)
            .map(this.extractData)
            .catch(this.handleError);
  }
  private extractData(res: Response){
    let body = res.json();
    console.log("yelp services");
    console.log(body);
    return body || { };
  }
  private handleError(error: Response | any){
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
