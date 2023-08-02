import { Component, Input, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Devise } from 'src/app/models/fournisseurDetails';
import { FournisseurService } from '../../service/fournisseur.service';
interface Column {
    field: string;
    header: string;
  }
@Component({
  selector: 'app-fournisseur.devise',
  templateUrl: './fournisseur.devise.component.html',
  styleUrls: ['./fournisseur.devise.component.scss']
})
export class FournisseurDeviseComponent implements OnInit{
    devise!: Devise[];

    cols!: Column[];

    _selectedColumns!: Column[];

    searchKeyword: string = '';

    constructor( private fournisseurService:FournisseurService) {}

    ngOnInit() {
          this.fournisseurService.getDevise().then((data) => {
            this.devise = data;
          });


      this.cols = [
        { field: 'devise', header: 'Devise' },
        { field: 'cout', header: 'Cout' },


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
