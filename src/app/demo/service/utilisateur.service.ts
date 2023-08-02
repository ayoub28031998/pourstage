import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chauffeur } from 'src/app/models/Chauffeur';
import { Utilisateur } from 'src/app/models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  constructor(private http: HttpClient) { }

  updateUser(utilisateur:Utilisateur){
    return this.http.put('assets/demo/data/utilisateur.json',utilisateur);
  }

  deleteUser(utilisateur:Utilisateur){
    return this.http.delete('assets/demo/data/utilisateur.json');
  }

  getUsers() {
    return this.http.get<any>('assets/demo/data/utilisateur.json')
        .toPromise()
        .then(res => res.data as Utilisateur[])
        .then(data => data);
}
}
