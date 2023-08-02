import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [{ path: '', component: FournisseurComponent }]
)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
