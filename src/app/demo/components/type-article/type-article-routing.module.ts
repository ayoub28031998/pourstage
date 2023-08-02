import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeArticleComponent } from './type-article.component';

const routes: Routes = [
  { path: '', component: TypeArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeArticleRoutingModule { }
