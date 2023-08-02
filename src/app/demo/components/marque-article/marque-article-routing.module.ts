import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarqueArticleComponent } from './marque-article.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MarqueArticleComponent }
])],
  exports: [RouterModule]
})
export class MarqueRoutingRoutingModule { }
