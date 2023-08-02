import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeResponsableComponent } from './type-responsable.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: TypeResponsableComponent }
])],
  exports: [RouterModule]
})
export class TypeResponsableRoutingModule { }
