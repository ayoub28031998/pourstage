import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FournisseurContact } from 'src/app/models/FournisseurContact';

@Injectable({
    providedIn: 'root'
})
export class FournisseurContactService {

    constructor(private http: HttpClient) { }

    updateFournisseurs(fournisseurContact: FournisseurContact) {
        return this.http.put('assets/demo/data/fournisseurContact.json', fournisseurContact);
    }

    deleteFournisseurs(fournisseurContact: FournisseurContact) {
        return this.http.delete('assets/demo/data/fournisseurContact.json');
    }

    getFournisseurs() {
        return this.http.get<any>('assets/demo/data/fournisseurContact.json')
            .toPromise()
            .then(res => res.data as FournisseurContact[])
            .then(data => data);
    }
}
