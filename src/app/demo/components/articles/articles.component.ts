import { Component, ElementRef, ViewChild } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from '../../service/article.service';
import { SimpleModalOptions, SimpleModalService, defaultSimpleModalOptions } from 'ngx-simple-modal';
import { ArticleModalComponent } from '../article-modal/article-modal.component';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;
  articles: Article[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private articleService: ArticleService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(article:Article) {    
    this.modalOptions.closeOnClickOutside=true;       
    this.simpleModalService.addModal(ArticleModalComponent,article);
  }

  openAddModal() {    
    let article!:Article;
    this.modalOptions.closeOnClickOutside=true;       
    this.simpleModalService.addModal(ArticleModalComponent,article);
  }
  deleteArticle(article:Article){
    this.articleService.deleteArticle(article).subscribe();
  }

  ngOnInit() {
    this.articleService.getArticles().then((articles) => {
          this.articles = articles;

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
