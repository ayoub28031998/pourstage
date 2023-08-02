import { Component, Input, OnInit } from '@angular/core';
import { SousRegion } from 'src/app/models/fournisseurDetails';
import { FournisseurService } from '../../service/fournisseur.service';
import { Table } from 'primeng/table';
interface Column {
    field: string;
    header: string;
  }
@Component({
  selector: 'app-fournisseur.sous-region',
  templateUrl: './fournisseur.sous-region.component.html',
  styleUrls: ['./fournisseur.sous-region.component.scss']
})
export class FournisseurSousRegionComponent implements OnInit{

    sousRegion!: SousRegion[];

    cols!: Column[];

    _selectedColumns!: Column[];

    searchKeyword: string = '';

    constructor( private fournisseurService:FournisseurService) {}
    ngOnInit() {
        this.fournisseurService.getSousRegion().then((data) => {
          this.sousRegion = data;
        });


    this.cols = [
      { field: 'sousRegion', header: 'Sous Région' },
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
