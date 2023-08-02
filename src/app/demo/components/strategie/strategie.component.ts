import { Strategie } from './../../../models/Strategie';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {StrategieService } from '../../service/strategie.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-strategie',
  templateUrl: './strategie.component.html',
  styleUrls: ['./strategie.component.scss']
})
export class StrategieComponent {
  strategies: Strategie[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private strategieService:StrategieService, private simpleModalService: SimpleModalService) { }

  openModal(retenu: Strategie) {
    console.log(retenu.codeStrategieVente);
    //this.simpleModalService.addModal(StrategieModalComponent, retenu);
  }

  deleteRetenu(strategie: Strategie) {
    //this.stockService.deleteStock(stock).subscribe();
  }

  ngOnInit() {
    this.strategieService.getStrategie().then((strategies) => {
      this.strategies = strategies;
      console.log(this.strategies);

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
