import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaninghotelComponent } from './planinghotel.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PlaninghotelComponent }
])],
  exports: [RouterModule]
})
export class PlaninghotelRoutingModule { }
