import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventaireComponent } from './inventaire.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: InventaireComponent }
])],
  exports: [RouterModule]
})
export class InventaireRoutingModule { }