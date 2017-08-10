/**
 * Created by Nnamdi on 5/10/2017.
 */
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private userPoints: number;
  private userItems: any[];

  getUserPoints(){
    return this.userPoints;
  }

  setUserPoints(points){
    this.userPoints = points;
  }

  setUserItems(userItems){
    this.userItems = userItems;
  }

  getUsetItems(){
    return this.userItems;
  }
}
