import { Component, ElementRef, ViewChild } from '@angular/core';
import { Inventaire } from 'src/app/models/inventaire';
import { InventaireService } from '../../service/inventaire.service';
import { SimpleModalOptions, SimpleModalService, defaultSimpleModalOptions } from 'ngx-simple-modal';
import { InventaireModalComponent } from '../inventaire-modal/inventaire-modal.component';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.scss']
})
export class InventaireComponent {
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;
  
  inventaires: Inventaire[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private inventaireService: InventaireService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(inventaire:Inventaire) {    
    this.modalOptions.closeOnClickOutside=true;   

    this.simpleModalService.addModal(InventaireModalComponent,inventaire,this.modalOptions);
  }
  openAddModal() {   
    this.modalOptions.closeOnClickOutside=true;   
 
    let inventaire!:Inventaire;
    this.simpleModalService.addModal(InventaireModalComponent,inventaire,this.modalOptions);
  
  }
  deleteFournisseur(inventaire:Inventaire){
    this.inventaireService.deleteInventaire(inventaire).subscribe();
  }

  ngOnInit() {
    this.inventaireService.getInventaires().then((res) => {
          this.inventaires = res;
          this.loading = false;

      });
    }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
      table.clear();
      this.filter.nativeElement.value = '';
  }
}
