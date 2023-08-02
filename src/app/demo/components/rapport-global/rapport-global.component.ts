import { Component,  ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ChauffeurService } from '../../service/chauffeur.service';
import { Chauffeur } from 'src/app/models/Chauffeur';
import { SimpleModalOptions, SimpleModalService, defaultSimpleModalOptions } from 'ngx-simple-modal';
import {  ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-rapport-global',
  templateUrl: './rapport-global.component.html',
  styleUrls: ['./rapport-global.component.scss'],
  providers: [MessageService, ConfirmationService,]
})
export class RapportGlobalComponent {
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;

  chauffeurs: Chauffeur[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private customerService: ChauffeurService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(chauffeur:Chauffeur) { 
    this.modalOptions.closeOnClickOutside=true;   
    console.log(chauffeur.cin);
    
    this.simpleModalService.addModal(ModalComponent,chauffeur,this.modalOptions);
  }
  openAddModal() { 
    let chauffeur!:Chauffeur;
    this.modalOptions.closeOnClickOutside=true;   
    this.simpleModalService.addModal(ModalComponent,chauffeur,this.modalOptions);
  }


  ngOnInit() {
      this.customerService.getCustomersLarge().then(customers => {
        console.log(customers);
        
          this.chauffeurs = customers;
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