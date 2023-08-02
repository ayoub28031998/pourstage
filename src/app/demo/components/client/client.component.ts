import { Component, ElementRef, ViewChild } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientService } from '../../service/client.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ClientModalComponent } from '../client-modal/client-modal.component';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  clients: Client[] = [];
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private clientService: ClientService,private simpleModalService: SimpleModalService,) {}

  openUpdateModal(client:Client) {    
    console.log(client.adresse);
    this.simpleModalService.addModal(ClientModalComponent,client);
  }
  openAddModal() {    
    this.simpleModalService.addModal(ClientModalComponent);
  }
  deleteArticle(client:Client){
    //this.customerService.deleteArticle(client).subscribe();
  }

  ngOnInit() {
    this.clientService.getArticles().then((clients) => {
          this.clients = clients;
          console.log(this.clients);

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