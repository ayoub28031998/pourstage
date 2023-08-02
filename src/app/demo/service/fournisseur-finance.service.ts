import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FournisseurFinance } from 'src/app/models/fournisseurFinance';

@Injectable({
  providedIn: 'root'
})
export class FournisseurFinanceService {

  constructor(private http:HttpClient) { }

  updateFournisseurFinance(fournisseurFianance:FournisseurFinance){
    return this.http.put('assets/demo/data/fournisseurFinance.json',fournisseurFianance);
  }

  deleteFournisseurFinance(fournisseurFianance:FournisseurFinance){
    return this.http.delete('assets/demo/data/fournisseurFinance.json');
  }

  getFournisseurFinance() {
      return this.http.get<any>('assets/demo/data/fournisseurFinance.json')
          .toPromise()
          .then(res => res.data as FournisseurFinance[])
          .then(data => data);
  }
}
