import { Component, ElementRef, ViewChild } from '@angular/core';
import { SimpleModalOptions, SimpleModalService, defaultSimpleModalOptions } from 'ngx-simple-modal';
import { SecteurActivite } from 'src/app/models/SecteurActivite';
import { SecteurActiviteService } from '../../service/secteur-activite.service';
import { SecteurActiviteModalComponent } from '../secteur-activite-modal/secteur-activite-modal.component';
import { Table } from 'primeng/table';
import { SocieteParametrageTaxe } from 'src/app/models/SocieteParametrageTaxe';
import { SocieteParametrageTaxeService } from '../../service/societe-parametrage-taxe.service';
import { SocieteParametrageTaxeModalComponent } from '../societe-parametrage-taxe-modal/societe-parametrage-taxe-modal.component';

@Component({
  selector: 'app-societe-parametrage-taxe',
  templateUrl: './societe-parametrage-taxe.component.html',
  styleUrls: ['./societe-parametrage-taxe.component.scss']
})
export class SocieteParametrageTaxeComponent {
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;

  societesParametrageTaxe: SocieteParametrageTaxe[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private societeParametrageTaxeService: SocieteParametrageTaxeService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(societeParametrageTaxe: SocieteParametrageTaxe) { 
    this.modalOptions.closeOnClickOutside=true;   
    
    this.simpleModalService.addModal(SocieteParametrageTaxeModalComponent,societeParametrageTaxe,this.modalOptions);
  }

  openAddModal() { 
    this.modalOptions.closeOnClickOutside=true;   
    let societeParametrageTaxe!:SocieteParametrageTaxe;
    this.simpleModalService.addModal(SocieteParametrageTaxeModalComponent,societeParametrageTaxe,this.modalOptions);
  }


  ngOnInit() {
      this.societeParametrageTaxeService.getSocieteParametrageTaxe().then(societesParametrageTaxe => {
        
          this.societesParametrageTaxe = societesParametrageTaxe;
          console.log(societesParametrageTaxe);
          
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