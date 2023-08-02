import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) { }
  
    updateArticle(article:Article){
      return this.http.put('assets/demo/data/article.json',article);
    }
  
    deleteArticle(article:Article){
      return this.http.delete('assets/demo/data/article.json');
    }
  
    getArticles() {
        return this.http.get<any>('assets/demo/data/article.json')
            .toPromise()
            .then(res => res.data as Article[])
            .then(data => data);
    }
  }
  