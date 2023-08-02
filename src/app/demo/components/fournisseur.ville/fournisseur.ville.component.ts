import { Component, Input, OnInit } from '@angular/core';
import { FournisseurService } from '../../service/fournisseur.service';
import { Table } from 'primeng/table';
import { Ville } from 'src/app/models/fournisseurDetails';

interface Column {
    field: string;
    header: string;
  }
@Component({
  selector: 'app-fournisseur.ville',
  templateUrl: './fournisseur.ville.component.html',
  styleUrls: ['./fournisseur.ville.component.scss']
})
export class FournisseurVilleComponent implements OnInit{

    ville!: Ville[];

    cols!: Column[];

    _selectedColumns!: Column[];

    searchKeyword: string = '';

    constructor( private fournisseurService:FournisseurService) {}
    ngOnInit() {
        this.fournisseurService.getVille().then((data) => {
          this.ville = data;
        });


    this.cols = [
      { field: 'ville', header: 'Ville' },
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


