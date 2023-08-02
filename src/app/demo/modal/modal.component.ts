import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent, SimpleModalOptions } from 'ngx-simple-modal';
import { Chauffeur } from 'src/app/models/Chauffeur';
import { ChauffeurService } from '../service/chauffeur.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends SimpleModalComponent<Chauffeur, any> implements Chauffeur{
  codeChauffeur: string="";
  codeResponsable: string="";
  nomPrenom: string="";
  cin: string="";
  tel1: string="";
  tel2: string="";
  actif: boolean | null=false;
  creerPar: string="";
  dateCreation!: Date;
 constructor(private chauffeurService: ChauffeurService,){
   super();
   
 }
  

  cancel() {
    this.result = null;
    this.close();
  }

  confirm() {
  console.log(this.codeChauffeur);
    this.chauffeurService.updateCustomers(this);
    this.close();
  }

}