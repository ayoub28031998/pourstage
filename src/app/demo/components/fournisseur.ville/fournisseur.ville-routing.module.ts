import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurVilleComponent } from './fournisseur.ville.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FournisseurVilleComponent }
])],
  exports: [RouterModule]
})
export class FournisseurVilleRoutingModule { }
