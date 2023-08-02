import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { MarqueArticleComponent } from './marque-article.component';
import { MarqueRoutingRoutingModule } from './marque-article-routing.module';


@NgModule({
  declarations: [
    MarqueArticleComponent,
    
   
  ],
  imports: [
    CommonModule,
    MarqueRoutingRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    SliderModule,
    RatingModule,
      TableModule,
      CommonModule,
          FormsModule,
          RatingModule,
          ButtonModule,
          SliderModule,
          InputTextModule,
          ToggleButtonModule,
          RippleModule,
          MultiSelectModule,
          DropdownModule,
          ProgressBarModule,
          ToastModule

  ],
  exports: [
    MarqueArticleComponent
  ]
})
export class MarqueModule { }
