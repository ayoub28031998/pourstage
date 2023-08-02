import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurLangueComponent } from './fournisseur.langue.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component:  FournisseurLangueComponent  }
])],
  exports: [RouterModule]
})
export class FournisseurLangueRoutingModule { }
