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
import { FournisseurComponent } from './fournisseur.component';
import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MatTabsModule } from '@angular/material/tabs';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputMaskModule } from 'primeng/inputmask';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';






@NgModule({
    declarations: [FournisseurComponent],
    imports: [
      CommonModule,
      FournisseurRoutingModule,
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
          ToastModule,
          DialogModule,
          OverlayPanelModule,
          SplitButtonModule,
          MenuModule,
          TooltipModule,
          ChipsModule,
          CalendarModule,
          AutoCompleteModule,
          InputNumberModule,
          RadioButtonModule,
          ToolbarModule,
          InputTextareaModule,
          ToolbarModule,
          FileUploadModule,
          MatTabsModule,
          AccordionModule,
          DropdownModule,
          FieldsetModule,
          TabViewModule,
          PanelModule,
          CheckboxModule,
          MatInputModule,
          MatFormFieldModule,
          AutoCompleteModule,
		 CalendarModule,
		 ChipsModule,
		 DropdownModule,
		 InputMaskModule,
		 InputNumberModule,
		 CascadeSelectModule,
		 MultiSelectModule,
		 InputTextareaModule,
		 InputTextModule,
         DividerModule,
         ListboxModule
    ]

  })
  export class FournisseurModule {

  }

