import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Fournisseur } from 'src/app/models/Fournisseur';
import { FournisseurService } from '../../service/fournisseur.service';

@Component({
  selector: 'app-fournisseur-modal',
  templateUrl: './fournisseur-modal.component.html',
  styleUrls: ['./fournisseur-modal.component.scss']
})
export class FournisseurModalComponent extends SimpleModalComponent<Fournisseur, any> implements Fournisseur {
  codeFournisseur: string="";
  codeFamilleFournisseur: string="";
  numeroCompte: string="";
  raisonSociale: string="";
  codeSecteurActivite: string="";
  indentiterObligatoire: boolean=false;
  matriculeFiscale: string="";
  cin: string="";
  registreCommerce: string="";
  numeroExport: string="";
  codeDevise: string="";
  codePays: string="";
  codeZoneCommercial: string="";
  codeVille: string="";
  codeSousRegion: string="";
  codePostal: string="";
  adresse1: string="";
  adresse2: string="";
  tel1: string="";
  tel2: string="";
  tel3: string="";
  mail1: string="";
  mail2: string="";
  siteWeb: string="";
  codeBanque: string="";
  ribBanquaire: string="";
  nomGerant: string="";
  commercial: boolean=false;
  economat: boolean=false;
  immobilisation: boolean=false;
  service: boolean=false;
  actif: boolean=false;
  articleActif: boolean=false;
  changerRaison: boolean=false;
  noteAfficher: string="";
  observation: string="";
  receptionDocumentObligatoire: boolean=false;
  dateCreation: Date=new Date();
  creerPar: string="";
  valider: boolean=false;
  dateValidation: string="";
  validerPar: string="";
  dateDerniereModification: Date=new Date();
  derniereModificationPar: string="";
  constructor(private fournisseurService: FournisseurService){
    super();
  }
   cancel() {
     this.result = null;
     this.close();
   }
   
   confirm() {
   //console.log(this.cin);
     //this.clientService.updateArticle(this);
     this.close();
   }
}