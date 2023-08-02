import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: StockComponent }
])],
  exports: [RouterModule]
})
export class StockRoutingRoutingModule { }
