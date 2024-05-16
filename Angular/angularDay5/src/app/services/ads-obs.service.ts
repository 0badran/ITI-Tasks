import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsObsService {
  ads: string[];
  constructor() {
    this.ads = ["ads1", "ads2", "ads3", "ads4"];
  }

  nextAds() {
    return new Observable<string>((obs) => {
      let index = 0;
      let unInterval = setInterval(() => {
        obs.next(this.ads[index++]);
        if (index == this.ads.length) {
          obs.complete();
          clearInterval(unInterval);
        }
      },2000);
    })
  }
}
