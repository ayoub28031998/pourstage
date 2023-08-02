import { MarqueArticle } from '../../../models/MarqueArticle';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { Table } from 'primeng/table';
import { MarqueService } from '../../service/marque.service';

@Component({
  selector: 'app-marque-article',
  templateUrl: './marque-article.component.html',
  styleUrls: ['./marque-article.component.scss']
})
export class MarqueArticleComponent {
  marques: MarqueArticle[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private marqueService: MarqueService, private simpleModalService: SimpleModalService) { }

  openModal(marque: MarqueArticle) {
    console.log(marque.codeMarqueArticle);
    //this.simpleModalService.addModal(ArticleMarqueModalComponent, marque);
  }

  deleteStock(marque: MarqueArticle) {
    //this.stockService.deleteStock(stock).subscribe();
  }

  ngOnInit() {
    this.marqueService.getMarque().then((marques) => {
      this.marques = marques;
      console.log(this.marques);

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
