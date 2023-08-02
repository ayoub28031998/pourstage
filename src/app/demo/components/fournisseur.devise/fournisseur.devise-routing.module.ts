import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurDeviseComponent } from './fournisseur.devise.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FournisseurDeviseComponent }
])],
  exports: [RouterModule]
})
export class FournisseurDeviseRoutingModule { }
