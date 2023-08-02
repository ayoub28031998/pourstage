import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ModalComponent } from './demo/modal/modal.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { FormsModule } from '@angular/forms';
import { UtilisateurModalComponent } from './demo/utilisateur-modal/utilisateur-modal.component';
import { ArticleModalComponent } from './demo/components/article-modal/article-modal.component';
import { ClientModalComponent } from './demo/components/client-modal/client-modal.component';
import { FournisseurModalComponent } from './demo/components/fournisseur-modal/fournisseur-modal.component';
import { FournisseurFinanceModalComponent } from './demo/components/fournisseur-finance-modal/fournisseur-finance-modal.component';
import { InventaireModalComponent } from './demo/components/inventaire-modal/inventaire-modal.component';
import { FournisseurConventionModalComponent } from './demo/components/fournisseur-convention-modal/fournisseur-convention-modal.component';
import { ModeReglementModalComponent } from './demo/components/mode-reglement-modal/mode-reglement-modal.component';
import { SecteurActiviteModalComponent } from './demo/components/secteur-activite-modal/secteur-activite-modal.component';
import { SocieteParametrageTaxeModalComponent } from './demo/components/societe-parametrage-taxe-modal/societe-parametrage-taxe-modal.component';
import { TypeResponsableModalComponent } from './demo/components/type-responsable-modal/type-responsable-modal.component';
import { Client2Service } from './demo/service/client2.service';
import { villeService } from './demo/service/ville.service';
import { regionService } from './demo/service/region.service';
import { MessageService } from 'primeng/api';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, ModalComponent, UtilisateurModalComponent, ArticleModalComponent, ClientModalComponent,  FournisseurModalComponent, FournisseurFinanceModalComponent,  InventaireModalComponent, FournisseurConventionModalComponent,  ModeReglementModalComponent,  SecteurActiviteModalComponent,  SocieteParametrageTaxeModalComponent,  TypeResponsableModalComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        SimpleModalModule ,
        FormsModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, Client2Service, villeService, regionService,
        MessageService

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
