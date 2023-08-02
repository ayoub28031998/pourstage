import { Component, Input, OnInit } from '@angular/core';
import { FournisseurService } from '../../service/fournisseur.service';
import { ProfessionContrat } from 'src/app/models/fournisseurDetails';
import { Table } from 'primeng/table';
interface Column {
    field: string;
    header: string;
  }
@Component({
  selector: 'app-fournisseur.profession.contrat',
  templateUrl: './fournisseur.profession.contrat.component.html',
  styleUrls: ['./fournisseur.profession.contrat.component.scss']
})
export class FournisseurProfessionContratComponent  implements OnInit{

    professioncontrat!: ProfessionContrat[];

    cols!: Column[];

    _selectedColumns!: Column[];

    searchKeyword: string = '';

    constructor( private fournisseurService:FournisseurService) {}
    ngOnInit() {
        this.fournisseurService.getProfessionContrat().then((data) => {
          this.professioncontrat = data;
        });


    this.cols = [
      { field: 'profession', header: 'Profession' },
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
