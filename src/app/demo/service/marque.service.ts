import { MarqueArticle } from './../../models/MarqueArticle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private http: HttpClient) { }
  updateMarque(marque:MarqueArticle){
    return this.http.put('assets/demo/data/marque.json',marque);
  }

  deleteMarque(marque:MarqueArticle){
    return this.http.delete('assets/demo/data/marque.json');
  }

  getMarque() {
      return this.http.get<any>('assets/demo/data/marque.json')
          .toPromise()
          .then(res => res.data as MarqueArticle[])
          .then(data => data);
  }
}

