import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { SocieteParametrageTaxe } from 'src/app/models/SocieteParametrageTaxe';
import { SocieteParametrageTaxeService } from '../../service/societe-parametrage-taxe.service';

@Component({
  selector: 'app-societe-parametrage-taxe-modal',
  templateUrl: './societe-parametrage-taxe-modal.component.html',
  styleUrls: ['./societe-parametrage-taxe-modal.component.scss']
})
export class SocieteParametrageTaxeModalComponent extends SimpleModalComponent<SocieteParametrageTaxe, any> implements SocieteParametrageTaxe {
  codeSociete!: string;
  fodec!: number;
  tpe!: number;
  tpe2!: number;
  droitConsommation!: number;
  timbreFiscale!: number;
  dateDerniereModification!: Date;
  derniereModificationPar!: string;
  constructor(private societeParametrageTaxeService: SocieteParametrageTaxeService,){
    super();
    
  }
   
 
   cancel() {
     this.result = null;
     this.close();
   }
 
   confirm() {
     this.societeParametrageTaxeService.updateSocieteParametrageTaxe(this);
     this.close();
   }
 
 }