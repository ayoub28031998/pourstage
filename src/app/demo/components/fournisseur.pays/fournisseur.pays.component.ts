import { Component, Input, OnInit } from '@angular/core';
import { FournisseurService } from '../../service/fournisseur.service';
import { Table } from 'primeng/table';
import { ListePays } from 'src/app/models/fournisseurDetails';
interface Column {
    field: string;
    header: string;
  }

@Component({
  selector: 'app-fournisseur.pays',
  templateUrl: './fournisseur.pays.component.html',
  styleUrls: ['./fournisseur.pays.component.scss']
})
export class FournisseurPaysComponent implements OnInit{
    pays!: ListePays[];

    cols!: Column[];

    _selectedColumns!: Column[];

    searchKeyword: string = '';

    constructor( private fournisseurService:FournisseurService) {}

    ngOnInit() {
          this.fournisseurService.getPays().then((data) => {
            this.pays = data;
          });


      this.cols = [
        { field: 'referenceTel', header: 'Référence Tél' },
        { field: 'devise', header: 'Devise' },
        { field: 'pays', header: 'Pays' },



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
