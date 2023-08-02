import { Component,  ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ChauffeurService } from '../../service/chauffeur.service';
import { Chauffeur } from 'src/app/models/Chauffeur';
import { SimpleModalOptions, SimpleModalService, defaultSimpleModalOptions } from 'ngx-simple-modal';
import {  ModalComponent } from '../../modal/modal.component';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { UtilisateurService } from '../../service/utilisateur.service';
import { UtilisateurModalComponent } from '../../utilisateur-modal/utilisateur-modal.component';

 @Component({
   selector: 'app-planinghotel',
   templateUrl: './planinghotel.component.html',
   styleUrls: ['./planinghotel.component.scss'],
   providers: [MessageService, ConfirmationService,] 
 })
 export class PlaninghotelComponent {
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;
  users: Utilisateur[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private utilisateurService: UtilisateurService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(user:Utilisateur) {    
    this.modalOptions.closeOnClickOutside=true;   
    this.simpleModalService.addModal(UtilisateurModalComponent,user);
  }
  openAddModal() {    
    this.modalOptions.closeOnClickOutside=true;   
    let user!:Utilisateur;
    this.simpleModalService.addModal(UtilisateurModalComponent,user);
  }

  ngOnInit() {
    this.utilisateurService.getUsers().then((users) => {
          this.users = users;
          console.log(this.users);

          this.loading = false;

      });
    }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
      table.clear();
      this.filter.nativeElement.value = '';
  }
  
}