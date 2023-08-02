import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeResponsable } from 'src/app/models/TypeResponsable';

@Injectable({
  providedIn: 'root'
})
export class TypeResponsableService {

  constructor(private http: HttpClient) { }
  
  updateTypeResponsable(typeResponsable:TypeResponsable){
    return this.http.put('assets/demo/data/typeResponsable.json',typeResponsable);
  }

  deleteTypeResponsable(typeResponsable:TypeResponsable){
    return this.http.delete('assets/demo/data/typeResponsable.json');
  }

  getTypeResponsable() {
      return this.http.get<any>('assets/demo/data/typeResponsable.json')
          .toPromise()
          .then(res => res.data as TypeResponsable[])
          .then(data => data);
  }
}
