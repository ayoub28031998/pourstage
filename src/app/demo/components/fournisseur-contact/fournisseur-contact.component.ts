import { Component, ElementRef, ViewChild } from '@angular/core';
import { FournisseurContact } from 'src/app/models/FournisseurContact';
import { FournisseurContactService } from '../../service/fournisseurContact.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { FournisseurModalComponent } from '../fournisseur-modal/fournisseur-modal.component';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur-contact.component.html',
  styleUrls: ['./fournisseur-contact.component.scss']
})
export class FournisseurContactComponent {
  fournisseurs: FournisseurContact[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private customerService: FournisseurContactService, private simpleModalService: SimpleModalService,) { }

  openModal(fournisseurContact: FournisseurContact) {
    //console.log(fournisseur.cin);

    //this.simpleModalService.addModal(FournisseurContactModalComponent, fournisseurContact);
  }
  deleteArticle(fournisseur: FournisseurContact) {
    this.customerService.deleteFournisseurs(fournisseur).subscribe();
  }


  ngOnInit() {
    this.customerService.getFournisseurs().then((fournisseurs) => {
      this.fournisseurs = fournisseurs;
      console.log(this.fournisseurs);

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
    //console.log(fournisseur.cin);

    //this.simpleModalService.addModal(FournisseurContactModalComponent);
  }
}
