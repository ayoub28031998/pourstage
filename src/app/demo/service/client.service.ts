import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { Client } from 'src/app/models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    constructor(private http: HttpClient) { }
  
    updateArticle(article:Article){
      return this.http.put('assets/demo/data/article.json',article);
    }
  
    deleteArticle(article:Article){
      return this.http.delete('assets/demo/data/article.json');
    }
  
    getArticles() {
        return this.http.get<any>('assets/demo/data/client.json')
            .toPromise()
            .then(res => res.data as Client[])
            .then(data => data);
    }
  }
  