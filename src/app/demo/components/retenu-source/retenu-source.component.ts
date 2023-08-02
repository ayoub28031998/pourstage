import { RetenuSourceService } from './../../service/retenuSource.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { RetenuSource } from 'src/app/models/RetenuSource';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-retenu-source',
  templateUrl: './retenu-source.component.html',
  styleUrls: ['./retenu-source.component.scss']
})
export class RetenuSourceComponent {
  retenus: RetenuSource[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private retenuSourceService: RetenuSourceService, private simpleModalService: SimpleModalService) { }

  openModal(retenu: RetenuSource) {
    console.log(retenu.codeRetenu);
    //this.simpleModalService.addModal(RetenuSourceModalComponent, retenu);
  }

  deleteRetenu(retenu: RetenuSource) {
    //this.stockService.deleteStock(stock).subscribe();
  }

  ngOnInit() {
    this.retenuSourceService.getRetenu().then((retenus) => {
      this.retenus = retenus;
      console.log(this.retenus);

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
