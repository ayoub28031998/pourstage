import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ArticlesComponent }
])],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
