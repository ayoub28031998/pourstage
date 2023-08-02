import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeArticle } from 'src/app/models/TypeArticle';

@Injectable({
    providedIn: 'root'
})
export class TypeArticleService {

    constructor(private http: HttpClient) { }

    updateTypeArticles(typeArticle: TypeArticle) {
        return this.http.put('assets/demo/data/typeArticle.json', typeArticle);
    }

    deleteTypeArticles(typeArticle: TypeArticle) {
        return this.http.delete('assets/demo/data/typeArticle.json');
    }

    getTypeArticles() {
        return this.http.get<any>('assets/demo/data/typeArticle.json')
            .toPromise()
            .then(res => res.data as TypeArticle[])
            .then(data => data);
    }
}
