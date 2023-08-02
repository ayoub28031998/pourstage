import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { TypeResponsable } from 'src/app/models/TypeResponsable';
import { TypeResponsableService } from '../../service/type-responsable.service';

@Component({
  selector: 'app-type-responsable-modal',
  templateUrl: './type-responsable-modal.component.html',
  styleUrls: ['./type-responsable-modal.component.scss']
})
export class TypeResponsableModalComponent extends SimpleModalComponent<TypeResponsable, any> implements TypeResponsable{
  codeTypeResponsable!: string;
  libelleTypeResponsable!: string;
  constructor(private typeResponsableService: TypeResponsableService,){
    super();
    
  }
   
 
   cancel() {
     this.result = null;
     this.close();
   }
 
   confirm() {
     this.typeResponsableService.updateTypeResponsable(this);
     this.close();
   }
 
 }