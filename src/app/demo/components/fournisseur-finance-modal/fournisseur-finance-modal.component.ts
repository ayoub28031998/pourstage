import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Fournisseur } from 'src/app/models/Fournisseur';
import { FournisseurFinance } from 'src/app/models/fournisseurFinance';

@Component({
  selector: 'app-fournisseur-finance-modal',
  templateUrl: './fournisseur-finance-modal.component.html',
  styleUrls: ['./fournisseur-finance-modal.component.scss']
})
export class FournisseurFinanceModalComponent extends SimpleModalComponent<FournisseurFinance, any> implements FournisseurFinance {
  codeFournisseur!: string;
  payerTva?: boolean | null | undefined;
  exonorer!: boolean;
  exportIndirect!: boolean;
  etranger!: boolean;
  fodec!: boolean;
  tpe!: boolean;
  tpe2!: boolean;
  avanceSurImpot!: boolean;
  droitConsomation!: boolean;
  timbreFiscal?: boolean | null | undefined;
  dateDerniereModification!: Date;
  derniereModificationPar!: string;
  
  cancel() {
    this.result = null;
    this.close();
  }

  confirm() {
  this.close();
  }
}