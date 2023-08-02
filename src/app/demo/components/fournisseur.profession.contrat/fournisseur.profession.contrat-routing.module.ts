import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurProfessionContratComponent } from './fournisseur.profession.contrat.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component:  FournisseurProfessionContratComponent  }
])],
  exports: [RouterModule]
})
export class FournisseurProfessionContratRoutingModule { }
