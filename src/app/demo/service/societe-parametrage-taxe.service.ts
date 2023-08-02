import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocieteParametrageTaxe } from 'src/app/models/SocieteParametrageTaxe';

@Injectable({
  providedIn: 'root'
})
export class SocieteParametrageTaxeService {

  constructor(private http: HttpClient) { }
  
  updateSocieteParametrageTaxe(SocieteParametrageTaxeService:SocieteParametrageTaxe){
    return this.http.put('assets/demo/data/societeParametrageTaxe.json',SocieteParametrageTaxeService);
  }

  deleteSocieteParametrageTaxe(SocieteParametrageTaxeService:SocieteParametrageTaxe){
    return this.http.delete('assets/demo/data/societeParametrageTaxe.json');
  }

  getSocieteParametrageTaxe() {
      return this.http.get<any>('assets/demo/data/societeParametrageTaxe.json')
          .toPromise()
          .then(res => res.data as SocieteParametrageTaxe[])
          .then(data => data);
  }
}
