import { Strategie } from './../../models/Strategie';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class StrategieService {

  constructor(private http: HttpClient) { }
  updateStrategie(strategie:Strategie){
    return this.http.put('assets/demo/data/strategie.json',strategie);
  }

  deleteStrategie(retenu:Strategie){
    return this.http.delete('assets/demo/data/strategie.json');
  }

  getStrategie() {
      return this.http.get<any>('assets/demo/data/strategie.json')
          .toPromise()
          .then(res => res.data as Strategie[])
          .then(data => data);
  }
}

