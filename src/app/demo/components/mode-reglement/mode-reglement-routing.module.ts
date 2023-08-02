import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeReglementComponent } from './mode-reglement.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ModeReglementComponent }
])],
  exports: [RouterModule]
})
export class ModeReglementRoutingModule { }