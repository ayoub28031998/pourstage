import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chauffeur } from 'src/app/models/Chauffeur';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  constructor(private http: HttpClient) { }

  updateCustomers(chauffeur:Chauffeur){
    return this.http.put('assets/demo/data/chauffeur.json',chauffeur);
  }

  deleteCustomers(chauffeur:Chauffeur){
    return this.http.delete('assets/demo/data/chauffeur.json');
  }

  getCustomersLarge() {
      return this.http.get<any>('assets/demo/data/chauffeur.json')
          .toPromise()
          .then(res => res.data as Chauffeur[])
          .then(data => data);
  }
}
