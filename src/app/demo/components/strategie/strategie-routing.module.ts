import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategieComponent } from './strategie.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: StrategieComponent }
])],
  exports: [RouterModule]
})
export class RetenuRoutingModule { }