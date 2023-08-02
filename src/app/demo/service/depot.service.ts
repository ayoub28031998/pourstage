import { Depot } from './../../models/depot';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http: HttpClient) { }
  updateDepot(depot:Depot){
    return this.http.put('assets/demo/data/depot.json',depot);
  }

  deleteDepot(depot:Depot){
    return this.http.delete('assets/demo/data/depot.json');
  }

  getDepot() {
      return this.http.get<any>('assets/demo/data/depot.json')
          .toPromise()
          .then(res => res.data as Depot[])
          .then(data => data);
  }
}

