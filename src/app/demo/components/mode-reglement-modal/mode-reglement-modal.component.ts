import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { ModeReglement } from 'src/app/models/ModeReglement';
import { ModeReglementService } from '../../service/mode-reglement.service';

@Component({
  selector: 'app-mode-reglement-modal',
  templateUrl: './mode-reglement-modal.component.html',
  styleUrls: ['./mode-reglement-modal.component.scss']
})
export class ModeReglementModalComponent  extends SimpleModalComponent<ModeReglement, any> implements ModeReglement {
  codeModeReglement!: string;
  libelleModeReglement!: string;
  actif!: boolean;
  dateCreation!: Date;
  creerPar!: string;
  constructor(private modeReglementService: ModeReglementService){
    super();
  }
   cancel() {
     this.result = null;
     this.close();
   }
 
   confirm() {

     this.close();
   }
}
