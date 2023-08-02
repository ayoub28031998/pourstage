import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurSousRegionComponent } from './fournisseur.sous-region.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component:  FournisseurSousRegionComponent }
])],
  exports: [RouterModule]
})
export class FournisseurSousRegionRoutingModule { }
