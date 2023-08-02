import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FournisseurConvention } from 'src/app/models/fournisseurConvention';

@Injectable({
  providedIn: 'root'
})
export class FournisseurConventionService {

  constructor(private http: HttpClient) { }

  updateFournisseur(fournisseurConvention:FournisseurConvention){
    return this.http.put('assets/demo/data/fournisseurConvention.json',fournisseurConvention);
  }

  deleteFournisseur(fournisseurConvention:FournisseurConvention){
    return this.http.delete('assets/demo/data/fournisseurConvention.json');
  }

  getFournisseurs() {
      return this.http.get<any>('assets/demo/data/fournisseurConvention.json')
          .toPromise()
          .then(res => res.data as FournisseurConvention[])
          .then(data => data);
  }
}

