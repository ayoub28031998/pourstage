import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class regionService {

    constructor(private http: HttpClient) { }

    getregion() {
        return this.http.get<any>('assets/demo/data/region.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}
