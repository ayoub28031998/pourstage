import { Component, ElementRef, ViewChild } from '@angular/core';
import { FournisseurFinance } from 'src/app/models/fournisseurFinance';
import { FournisseurFinanceService } from '../../service/fournisseur-finance.service';
import { SimpleModalOptions, SimpleModalService, defaultSimpleModalOptions } from 'ngx-simple-modal';
import { FournisseurFinanceModalComponent } from '../fournisseur-finance-modal/fournisseur-finance-modal.component';
import { Table } from 'primeng/table';
import { Fournisseur } from 'src/app/models/Fournisseur';

@Component({
  selector: 'app-fournisseur-finance',
  templateUrl: './fournisseur-finance.component.html',
  styleUrls: ['./fournisseur-finance.component.scss']
})
export class FournisseurFinanceComponent {
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;
  fournisseursFinance: FournisseurFinance[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private fournisseurFinanceService: FournisseurFinanceService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(fournisseur:FournisseurFinance) {    
    this.modalOptions.closeOnClickOutside=true;   
    this.simpleModalService.addModal(FournisseurFinanceModalComponent,fournisseur);
  }

  openAddModal() {    
    let fournisseur!:FournisseurFinance;
    this.modalOptions.closeOnClickOutside=true;   
    this.simpleModalService.addModal(FournisseurFinanceModalComponent,fournisseur);
  }
  deleteFournisseur(FournisseurFinance:FournisseurFinance){
    this.fournisseurFinanceService.deleteFournisseurFinance(FournisseurFinance).subscribe();
  }

  ngOnInit() {
    this.fournisseurFinanceService.getFournisseurFinance().then((res) => {
          this.fournisseursFinance = res;
          //console.log(this.articles);

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