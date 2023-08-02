import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Societe } from 'src/app/models/Societe';

@Injectable({
    providedIn: 'root'
})
export class SocieteService {

    constructor(private http: HttpClient) { }

    updateSocietes(societe: Societe) {
        return this.http.put('assets/demo/data/societe.json', societe);
    }

    deleteSocietes(societe: Societe) {
        return this.http.delete('assets/demo/data/societe.json');
    }

    getSocietesLarge() {
        return this.http.get<any>('assets/demo/data/societe.json')
            .toPromise()
            .then(res => res.data as Societe[])
            .then(data => data);
    }
}
