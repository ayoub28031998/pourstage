import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecteurActivite } from 'src/app/models/SecteurActivite';

@Injectable({
  providedIn: 'root'
})
export class SecteurActiviteService {

  constructor(private http: HttpClient) { }
  
  updateSecteurActivite(secteurActivite:SecteurActivite){
    return this.http.put('assets/demo/data/secteurActivite.json',secteurActivite);
  }

  deleteSecteurActivite(secteurActivite:SecteurActivite){
    return this.http.delete('assets/demo/data/secteurActivite.json');
  }

  getSecteurActivites() {
      return this.http.get<any>('assets/demo/data/secteurActivite.json')
          .toPromise()
          .then(res => res.data as SecteurActivite[])
          .then(data => data);
  }
}
