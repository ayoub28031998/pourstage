import { Component, ElementRef, ViewChild } from '@angular/core';
import { Societe } from 'src/app/models/Societe';
import { SimpleModalService } from 'ngx-simple-modal';
import { Table } from 'primeng/table';
import { SocieteService } from '../../service/societe.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent {
  societes: Societe[] = [];
  loading: boolean = true;
  factureDialog: boolean = false;
  submitted: boolean = false;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private customerService: SocieteService, private simpleModalService: SimpleModalService,) { }

  openModal(fournisseur: Societe) {
    //console.log(fournisseur.cin);

    //this.simpleModalService.addModal(SocieteModalComponent, fournisseur);
  }
  deleteArticle(fournisseur: Societe) {
    this.customerService.deleteSocietes(fournisseur).subscribe();
  }

  ngOnInit() {
    this.customerService.getSocietesLarge().then((customers) => {
      this.societes = customers;
      console.log(this.societes);

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

    //this.simpleModalService.addModal(SocieteModalComponent);
  }

}
