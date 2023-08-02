import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurPaysComponent } from './fournisseur.pays.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FournisseurPaysComponent }
])],
  exports: [RouterModule]
})
export class FournisseurPaysRoutingModule { }
