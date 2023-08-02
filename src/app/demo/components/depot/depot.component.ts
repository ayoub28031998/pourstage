import { Depot } from './../../../models/depot';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { DepotService } from '../../service/depot.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent {
  depots: Depot[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private depotService: DepotService, private simpleModalService: SimpleModalService) { }

  openModal(depot: Depot) {
    console.log(depot.CodeDepot);
    //this.simpleModalService.addModal(DepotModalComponent, depot);
  }

  deleteDepot(depot: Depot) {
    //this.stockService.deleteStock(stock).subscribe();
  }

  ngOnInit() {
    this.depotService.getDepot().then((depots) => {
      this.depots = depots;
      console.log(this.depots);

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
