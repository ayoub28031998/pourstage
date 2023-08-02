import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeReglement } from 'src/app/models/ModeReglement';

@Injectable({
  providedIn: 'root'
})
export class ModeReglementService {

  constructor(private http: HttpClient) { }

  updateModeReglement(modeReglement:ModeReglement){
    return this.http.put('assets/demo/data/modeReglement.json',modeReglement);
  }

  deleteModeReglement(modeReglement:ModeReglement){
    return this.http.delete('assets/demo/data/modeReglement.json');
  }

  getModeReglements() {
      return this.http.get<any>('assets/demo/data/modeReglement.json')
          .toPromise()
          .then(res => res.data as ModeReglement[])
          .then(data => data);
  }
}
