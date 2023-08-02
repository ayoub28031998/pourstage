import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocieteParametrageTaxeComponent } from './societe-parametrage-taxe.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SocieteParametrageTaxeComponent }
])],
  exports: [RouterModule]
})
export class SocieteParametrageTaxeRoutingModule { }
