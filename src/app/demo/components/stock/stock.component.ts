import { Component, ElementRef, ViewChild } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StockService } from '../../service/stock.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
  stocks: Stock[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private stockService: StockService, private simpleModalService: SimpleModalService) { }

  openModal(stock: Stock) {
    console.log(stock.CodeDepot);
    //this.simpleModalService.addModal(StockModalComponent, stock);
  }

  deleteStock(stock: Stock) {
    //this.stockService.deleteStock(stock).subscribe();
  }

  ngOnInit() {
    this.stockService.getStock().then((stocks) => {
      this.stocks = stocks;
      console.log(this.stocks);

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
