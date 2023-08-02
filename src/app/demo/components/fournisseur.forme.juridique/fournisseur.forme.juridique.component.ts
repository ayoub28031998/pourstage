import { Component, Input, OnInit } from '@angular/core';
import { FormeJuridiqueFournisseure } from 'src/app/models/FormeJuridique';
import { FournisseurService } from '../../service/fournisseur.service';
import { Table } from 'primeng/table';


interface Column {
    field: string;
    header: string;
  }
@Component({
  selector: 'app-fournisseur.forme.juridique',
  templateUrl: './fournisseur.forme.juridique.component.html',
  styleUrls: ['./fournisseur.forme.juridique.component.scss']
})
export class FournisseurFormeJuridiqueComponent implements OnInit{

    formeJuridique!: FormeJuridiqueFournisseure[];

    cols!: Column[];

    _selectedColumns!: Column[];

    searchKeyword: string = '';

    constructor( private fournisseurService:FournisseurService) {}
    ngOnInit() {
        this.fournisseurService.getFormeJuridiqueFournisseur().then((data) => {
          this.formeJuridique = data;
        });


    this.cols = [
      { field: 'libelle', header: 'Libellé' },
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
