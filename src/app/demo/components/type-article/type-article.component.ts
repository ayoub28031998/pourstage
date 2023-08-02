import { Component, ElementRef, ViewChild } from '@angular/core';
import { TypeArticle } from 'src/app/models/TypeArticle';
import { SimpleModalService } from 'ngx-simple-modal';
import { Table } from 'primeng/table';
import { TypeArticleService } from '../../service/typeArticle.service';

@Component({
  selector: 'app-type-article',
  templateUrl: './type-article.component.html',
  styleUrls: ['./type-article.component.scss']
})
export class TypeArticleComponent {
  typeArticles: TypeArticle[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private typeArticleService: TypeArticleService, private simpleModalService: SimpleModalService) { }

  openModal(typeArticle: TypeArticle) {
    //this.simpleModalService.addModal(TypeArticleModalComponent, typeArticle);
  }

  deleteTypeArticle(typeArticle: TypeArticle) {
    this.typeArticleService.deleteTypeArticles(typeArticle).subscribe();
  }

  ngOnInit() {
    this.typeArticleService.getTypeArticles().then((typeArticles) => {
      console.log(typeArticles);
      
      this.typeArticles = typeArticles;
      console.log(this.typeArticles);

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

  add() {
    //this.simpleModalService.addModal(TypeArticleModalComponent);
    
  }
}
