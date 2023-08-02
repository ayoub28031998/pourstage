import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { SecteurActivite } from 'src/app/models/SecteurActivite';
import { SecteurActiviteService } from '../../service/secteur-activite.service';

@Component({
  selector: 'app-secteur-activite-modal',
  templateUrl: './secteur-activite-modal.component.html',
  styleUrls: ['./secteur-activite-modal.component.scss']
})
export class SecteurActiviteModalComponent extends SimpleModalComponent<SecteurActivite, any> implements SecteurActivite{
  codeSecteurActivite!: string;
  libelleSecteurActivite!: string;
  dateCreation!: Date;
  creerPar!: string;
  constructor(private secteurActiviteService: SecteurActiviteService,){
    super();
    
  }
   
 
   cancel() {
     this.result = null;
     this.close();
   }
 
   confirm() {
     this.secteurActiviteService.updateSecteurActivite(this);
     this.close();
   }
 
 }