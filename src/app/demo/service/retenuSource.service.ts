import { Depot } from './../../models/depot';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RetenuSource } from 'src/app/models/RetenuSource';



@Injectable({
  providedIn: 'root'
})
export class RetenuSourceService {

  constructor(private http: HttpClient) { }
  updateRetenu(retenu:RetenuSource){
    return this.http.put('assets/demo/data/retenu.json',retenu);
  }

  deleteRetenu(retenu:RetenuSource){
    return this.http.delete('assets/demo/data/retenu.json');
  }

  getRetenu() {
      return this.http.get<any>('assets/demo/data/retenu.json')
          .toPromise()
          .then(res => res.data as RetenuSource[])
          .then(data => data);
  }
}

