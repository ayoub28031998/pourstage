import { Component, ElementRef, ViewChild } from '@angular/core';
import { SimpleModalOptions, SimpleModalService, defaultSimpleModalOptions } from 'ngx-simple-modal';
import { TypeResponsable } from 'src/app/models/TypeResponsable';
import { TypeResponsableService } from '../../service/type-responsable.service';
import { TypeResponsableModalComponent } from '../type-responsable-modal/type-responsable-modal.component';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-type-responsable',
  templateUrl: './type-responsable.component.html',
  styleUrls: ['./type-responsable.component.scss']
})
export class TypeResponsableComponent {
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;

  typeResponsables: TypeResponsable[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private typeResponsableService: TypeResponsableService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(typeResponsable: TypeResponsable) { 
    this.modalOptions.closeOnClickOutside=true;   
    
    this.simpleModalService.addModal(TypeResponsableModalComponent,typeResponsable,this.modalOptions);
  }

  openAddModal() { 
    this.modalOptions.closeOnClickOutside=true;   
    let typeResponsable!:TypeResponsable;
    this.simpleModalService.addModal(TypeResponsableModalComponent,typeResponsable,this.modalOptions);
  }


  ngOnInit() {
      this.typeResponsableService.getTypeResponsable().then(typeResponsables => {
        
          this.typeResponsables = typeResponsables;
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