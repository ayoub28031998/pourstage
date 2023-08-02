import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { SimpleModalOptions, SimpleModalService, defaultSimpleModalOptions } from 'ngx-simple-modal';
import { SecteurActivite } from 'src/app/models/SecteurActivite';
import { SecteurActiviteModalComponent } from '../secteur-activite-modal/secteur-activite-modal.component';
import { SecteurActiviteService } from '../../service/secteur-activite.service';
import { Table } from 'primeng/table';
import { NodeService } from '../../service/node.service';

// interface Column {
//   field: string;
//   header: string;
// }

// @Component({
//   selector: 'app-secteur-activite',
//   templateUrl: './secteur-activite.component.html',
//   styleUrls: ['./secteur-activite.component.scss']
// })
// export class SecteurActiviteComponent implements OnInit {
//   modalOptions: SimpleModalOptions = defaultSimpleModalOptions;
//   searchKeyword: string = '';
//   secteurActivites: SecteurActivite[] = [];
//   loading: boolean = true;
//   globalFilterValue: string = '';

//   cols!: Column[];
//   _selectedColumns!: Column[];
//   secteurActivite!: SecteurActivite[];

//   @ViewChild('filter') filter!: ElementRef;
//   @ViewChild('dt1') dt1!: Table;

//   constructor(
//     private customerService: SecteurActiviteService,
//     private simpleModalService: SimpleModalService,
//   ) {}



//   openAddModal() {
//     this.modalOptions.closeOnClickOutside = true;
//     let secteurActivite!: SecteurActivite;
//     this.simpleModalService.addModal(SecteurActiviteModalComponent, secteurActivite, this.modalOptions);
//   }

//   ngOnInit() {
//     this.customerService.getSecteurActivites().then((secteurAct) => {
//       this.secteurActivites = secteurAct;
//       console.log(secteurAct);
//       this.loading = false;
//     });

//     this.cols = [
//       { field: 'codeSecteurActivite', header: 'Code' },
//       { field: 'libelleSecteurActivite', header: 'Libellé' },
//       { field: 'creerPar', header: 'Créé par' }
//     ];

//     this._selectedColumns = this.cols;
//   }

//   onGlobalFilter(event: Event) {
//     this.dt1.filterGlobal((event.target as HTMLInputElement).value, 'contains');
//   }

//   clear(table: Table) {
//     table.clear();
//     this.searchKeyword = '';
//   }

//   @Input() get selectedColumns(): any[] {
//     return this._selectedColumns;
//   }

//   set selectedColumns(val: any[]) {
//     // restore original order
//     this._selectedColumns = this.cols.filter((col) => val.includes(col));
//   }
// }
interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-secteur-activite',
  templateUrl: './secteur-activite.component.html',
  styleUrls: ['./secteur-activite.component.scss']
})
export class SecteurActiviteComponent implements OnInit{
  products!: SecteurActivite[];

  cols!: Column[];

  _selectedColumns!: Column[];

  searchKeyword: string = '';
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;

  constructor(private secteurActiviteService: SecteurActiviteService,  private simpleModalService: SimpleModalService,) {
    
  }

  ngOnInit() {
        this.secteurActiviteService.getSecteurActivites().then((secteurAct) => {
          this.products = secteurAct;
          console.log(this.products[0].codeSecteurActivite);
        });


    this.cols = [
      { field: 'libelleSecteurActivite', header: 'Libellé' },
      { field: 'creerPar', header: 'Créé par' }
    ];

      this._selectedColumns = this.cols;
      
  }

  @Input() get selectedColumns(): any[] {
      return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
      //restore original order
      this._selectedColumns = this.cols.filter((col) => val.includes(col));
  } 

    clear(table: Table) {
    table.clear();
    this.searchKeyword = '';
  }
  
  openUpdateModal(secteurActivite:SecteurActivite) {
    this.modalOptions.closeOnClickOutside=true;
    this.simpleModalService.addModal(SecteurActiviteModalComponent,secteurActivite,this.modalOptions);
  }
}
