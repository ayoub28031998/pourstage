import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Client } from 'src/app/models/Client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.scss']
})
export class ClientModalComponent extends SimpleModalComponent<Client, any> implements Client {
  codeClient: string="";
  codeFamilleClient: string="";
  numeroCompte: string="";
  raisonSociale: string="";
  codeSecteurActivite: string="";
  indentiterObligatoire!: boolean;
  matriculeFiscale: string="";
  registreCommerce: string="";
  numeroExport: string="";
  codeDevise: string="";
  codeLangue: string="";
  codePays: string="";
  codeCommercial: string="";
  codeZoneCommercial: string="";
  codeVille: string="";
  codeSousRegion: string="";
  codePostal: string="";
  adresse: string="";
  multiAdresse!: boolean | null;
  tel1: string="";
  tel2: string="";
  tel3: string="";
  mail1: string="";
  mail2: string="";
  siteWeb: string="";
  nomGerant: string="";
  capital: number=0;
  cin: string="";
  dateOuverture: string="";
  actif!: boolean;
  blocageVente!: boolean | null;
  contentieux!: boolean;
  codeRetenuSource: string="";
  noteAfficher: string="";
  observation: string="";
  dateCreation: Date=new Date();
  creerPar: string="";
  valider!: boolean;
  dateValidation: string="";
  validerPar: string="";
  dateDerniereModification: Date=new Date();
  derniereModificationPar: string="";
  constructor(private clientService: ClientService){
    super();
  }
   cancel() {
     this.result = null;
     this.close();
   }
 
   confirm() {
   console.log(this.codeClient);
     //this.clientService.deleteArticle(this);
     this.close();
   }
}