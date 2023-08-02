import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Inventaire } from 'src/app/models/inventaire';
import { InventaireService } from '../../service/inventaire.service';

@Component({
  selector: 'app-inventaire-modal',
  templateUrl: './inventaire-modal.component.html',
  styleUrls: ['./inventaire-modal.component.scss']
})
export class InventaireModalComponent extends SimpleModalComponent<Inventaire, any> implements Inventaire {
  NumeroInventaire!: string;
  DateInventaire!: Date;
  CodeDepot!: string;
  CodeTypeInventaire!: string;
  Commercial!: boolean;
  Economat!: boolean;
  Immobilisation!: boolean;
  constructor(private inventaireService: InventaireService){
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
