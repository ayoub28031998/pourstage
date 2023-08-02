import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class villeService {

    constructor(private http: HttpClient) { }

    getville() {
        return this.http.get<any>('assets/demo/data/ville.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}
