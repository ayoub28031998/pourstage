import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Client2Service {

    constructor(private http: HttpClient) { }

    getClient2() {
        return this.http.get<any>('assets/demo/data/client2.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}
