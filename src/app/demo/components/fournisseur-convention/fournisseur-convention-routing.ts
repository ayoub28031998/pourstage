import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurConventionComponent } from './fournisseur-convention.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FournisseurConventionComponent }
])],
  exports: [RouterModule]
})
export class FournisseurConventionRoutingModule { }