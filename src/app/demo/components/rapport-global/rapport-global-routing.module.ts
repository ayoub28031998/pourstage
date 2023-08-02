import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapportGlobalComponent } from './rapport-global.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RapportGlobalComponent }
])],
  exports: [RouterModule]
})
export class RapportGlobalRoutingModule { }
