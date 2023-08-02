import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { FournisseurConvention } from 'src/app/models/fournisseurConvention';
import { FournisseurConventionService } from '../../service/fournisseur-convention.service';

@Component({
  selector: 'app-fournisseur-convention-modal',
  templateUrl: './fournisseur-convention-modal.component.html',
  styleUrls: ['./fournisseur-convention-modal.component.scss']
})
export class FournisseurConventionModalComponent extends SimpleModalComponent<FournisseurConvention, any> implements FournisseurConvention {
  codeFournisseur!: string;
  codeRetenuSource!: string;
  codeModeReglement!: string;
  moyenReglement!: number;
  approvisionnerPar!: number;
  delaiLivraison!: number;
  marge!: number;
  tauxRemise!: number;
  ristourne!: number;
  seuilCredit!: number;
  seuilEngagement!: number;
  constructor(private fournisseurConventionService: FournisseurConventionService){
    super();
  }
   cancel() {
     this.result = null;
     this.close();
   }
 
   confirm() {
   //console.log(this.cin);
     //this.clientService.deleteArticle(this);
     this.close();
   }
}