import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurFormeJuridiqueComponent } from './fournisseur.forme.juridique.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FournisseurFormeJuridiqueComponent }
])],
  exports: [RouterModule]
})
export class FournisseurFormeJuridiqueRoutingModule { }
