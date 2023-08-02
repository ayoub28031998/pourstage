import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecteurActiviteComponent } from './secteur-activite.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SecteurActiviteComponent }
])],
  exports: [RouterModule]
})
export class SecteurActiviteRoutingModule { }
