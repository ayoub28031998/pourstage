import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurFinanceComponent } from './fournisseur-finance.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FournisseurFinanceComponent }
])],
  exports: [RouterModule]
})
export class FournisseurFinanceRoutingModule { }