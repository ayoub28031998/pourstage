import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-utilisateur-modal',
  templateUrl: './utilisateur-modal.component.html',
  styleUrls: ['./utilisateur-modal.component.scss']
})
export class UtilisateurModalComponent extends SimpleModalComponent<Utilisateur, any> implements Utilisateur {
  nomUtilisateur: string="";
  motDePasse: string="";
  codeResponsable: string="";
  codeDroitAcces: string="";
  nomPrenom: string="";
  tel: string="";
  actif: boolean=false;
  creerPar: string="";
  dateCreation: Date=new Date();
  dateDerniereModification: Date=new Date();
  derniereModificationPar: string="";
  constructor(private utilisateurService: UtilisateurService){
    super();
  }
   cancel() {
     this.result = null;
     this.close();
   }
 
   confirm() {
   console.log(this.codeResponsable);
     this.utilisateurService.deleteUser(this);
     this.close();
   }
 
}
