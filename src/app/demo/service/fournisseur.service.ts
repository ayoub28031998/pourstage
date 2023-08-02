import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormeJuridiqueFournisseure } from 'src/app/models/FormeJuridique';
import { Fournisseur } from 'src/app/models/Fournisseur';
import { FamilleFournisseur } from 'src/app/models/familleFournisseur';
import { Devise, Langue, ListePays, ProfessionContrat, SousRegion, Ville } from 'src/app/models/fournisseurDetails';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http: HttpClient) { }

  updateArticle(fournisseur:Fournisseur){
    return this.http.put('assets/demo/data/article.json',fournisseur);
  }

  deleteFournisseur(fournisseur:Fournisseur){
    return this.http.delete('assets/demo/data/article.json');
  }

  getFournisseurs() {
      return this.http.get<any>('assets/demo/data/fournisseur.json')
          .toPromise()
          .then(res => res.data as Fournisseur[])
          .then(data => data);
  }
  ajouterFournisseur(fournisseur: Fournisseur): Promise<any> {
    console.log("service", fournisseur)
    return this.http.post('assets/demo/data/article.json', fournisseur).toPromise();
  }
  getFamilleFournisseur(){
    return this.http.get<any>('assets/demo/data/familleFournisseur.json')
    .toPromise()
    .then(res => res.data as FamilleFournisseur[])
    .then(data => data);
  }
  getFormeJuridiqueFournisseur(){
    return this.http.get<any>('assets/demo/data/fournisseurFormeJuridique.json')
    .toPromise()
    .then(res => res.data as FormeJuridiqueFournisseure[])
    .then(data => data);
  }
  getDevise(){
    return this.http.get<any>('assets/demo/data/devise.json')
    .toPromise()
    .then(res => res.data as Devise[])
    .then(data => data);
  }
  getPays(){
    return this.http.get<any>('assets/demo/data/pays.json')
    .toPromise()
    .then(res => res.data as ListePays[])
    .then(data => data);
  }
  getVille(){
    return this.http.get<any>('assets/demo/data/ville.json')
    .toPromise()
    .then(res => res.data as Ville[])
    .then(data => data);
  }
  getSousRegion(){
    return this.http.get<any>('assets/demo/data/sousRegion.json')
    .toPromise()
    .then(res => res.data as SousRegion[])
    .then(data => data);
  }
  getLangue(){
    return this.http.get<any>('assets/demo/data/langue.json')
    .toPromise()
    .then(res => res.data as Langue[])
    .then(data => data);
  }
  getProfessionContrat(){
    return this.http.get<any>('assets/demo/data/professionContrat.json')
    .toPromise()
    .then(res => res.data as ProfessionContrat[])
    .then(data => data);
  }

  getType(){
    return this.http.get<any>('assets/demo/data/Types.json')
    .toPromise()
    .then(res => res.data as any[])
    .then(data => data);
  }
}
