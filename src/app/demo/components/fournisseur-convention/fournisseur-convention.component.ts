import { Component, ElementRef, ViewChild } from '@angular/core';
import { FournisseurConventionService } from '../../service/fournisseur-convention.service';
import { FournisseurConventionModalComponent } from '../fournisseur-convention-modal/fournisseur-convention-modal.component';
import { Table } from 'primeng/table';
import { SimpleModalOptions, SimpleModalService, defaultSimpleModalOptions } from 'ngx-simple-modal';
import { FournisseurConvention } from 'src/app/models/fournisseurConvention';

@Component({
  selector: 'app-fournisseur-convention',
  templateUrl: './fournisseur-convention.component.html',
  styleUrls: ['./fournisseur-convention.component.scss']
})
export class FournisseurConventionComponent {
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;
  fournisseursConvention: FournisseurConvention[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private fournisseurConventionService: FournisseurConventionService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(fournisseurConvention:FournisseurConvention) {    
    
    this.simpleModalService.addModal(FournisseurConventionModalComponent,fournisseurConvention);
  }
  openAddModal() {    
    let fournisseurConvention!:FournisseurConvention;
    this.modalOptions.closeOnClickOutside=true;       
    this.simpleModalService.addModal(FournisseurConventionModalComponent,fournisseurConvention);
  }
  deleteFournisseur(fournisseurConvention:FournisseurConvention){
    this.fournisseurConventionService.deleteFournisseur(fournisseurConvention).subscribe();
  }

  ngOnInit() {
    this.fournisseurConventionService.getFournisseurs().then((res) => {
          this.fournisseursConvention = res;
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
