import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetenuSourceComponent } from './retenu-source.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RetenuSourceComponent }
])],
  exports: [RouterModule]
})
export class RetenuRoutingModule { }
