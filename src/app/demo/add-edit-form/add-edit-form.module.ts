import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddEditFormComponent } from './add-edit-form.component';

@NgModule({
  imports: [FormsModule],
  declarations: [AddEditFormComponent],
  exports: [AddEditFormComponent]
})
export class AddEditFormModule { }
