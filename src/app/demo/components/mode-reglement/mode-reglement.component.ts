import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModeReglement } from 'src/app/models/ModeReglement';
import { ModeReglementService } from '../../service/mode-reglement.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModeReglementModalComponent } from '../mode-reglement-modal/mode-reglement-modal.component';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-mode-reglement',
  templateUrl: './mode-reglement.component.html',
  styleUrls: ['./mode-reglement.component.scss']
})
export class ModeReglementComponent {
  modeReglements: ModeReglement[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private inventaireService: ModeReglementService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(modeReglement:ModeReglement) {    
    
    this.simpleModalService.addModal(ModeReglementModalComponent,modeReglement);
  }

  openAddModal() {    
    
    this.simpleModalService.addModal(ModeReglementModalComponent);
  }

  deletemodeReglement(modeReglement:ModeReglement){
    this.inventaireService.deleteModeReglement(modeReglement).subscribe();
  }

  ngOnInit() {
    this.inventaireService.getModeReglements().then((res) => {
          this.modeReglements = res;
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
