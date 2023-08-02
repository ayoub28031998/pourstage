import { Component, Input, OnInit } from '@angular/core';
import { FournisseurService } from '../../service/fournisseur.service';
import { Langue } from 'src/app/models/fournisseurDetails';
import { Table } from 'primeng/table';
interface Column {
    field: string;
    header: string;
  }
@Component({
  selector: 'app-fournisseur.langue',
  templateUrl: './fournisseur.langue.component.html',
  styleUrls: ['./fournisseur.langue.component.scss']
})
export class FournisseurLangueComponent implements OnInit{

    langue!: Langue[];

    cols!: Column[];

    _selectedColumns!: Column[];

    searchKeyword: string = '';

    constructor( private fournisseurService:FournisseurService) {}
    ngOnInit() {
        this.fournisseurService.getLangue().then((data) => {
          this.langue = data;
        });


    this.cols = [
      { field: 'designationLangue', header: 'Désignation Langue' },
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

}
