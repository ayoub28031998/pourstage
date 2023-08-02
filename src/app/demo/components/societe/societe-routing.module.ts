import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocieteComponent } from './societe.component';
const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SocieteComponent }
    ])],
    exports: [RouterModule]
})
export class SocieteRoutingModule { }