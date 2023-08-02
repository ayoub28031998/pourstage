import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventaire } from 'src/app/models/inventaire';

@Injectable({
  providedIn: 'root'
})
export class InventaireService {

  constructor(private http: HttpClient) { }

  updateInventaire(inventaire:Inventaire){
    return this.http.put('assets/demo/data/inventaire.json',inventaire);
  }

  deleteInventaire(inventaire:Inventaire){
    return this.http.delete('assets/demo/data/inventaire.json');
  }

  getInventaires() {
      return this.http.get<any>('assets/demo/data/inventaire.json')
          .toPromise()
          .then(res => res.data as Inventaire[])
          .then(data => data);
  }
}
