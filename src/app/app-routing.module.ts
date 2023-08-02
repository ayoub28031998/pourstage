import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/planinghotel/planinghotel.module').then(m => m.PlaninghotelModule) },
                    { path: 'fournisseurFinance', loadChildren: () => import('./demo/components/fournisseur-finance/fournisseur-finance.module').then(m => m.FournisseurFinanceModule) },


                    { path: 'fournisseurProfessionContrat', loadChildren: () => import('./demo/components/fournisseur.profession.contrat/fournisseur.profession.contrat.module').then(m => m.FournisseurProfessionContratModule) },
                    { path: 'fournisseurLangue', loadChildren: () => import('./demo/components/fournisseur.langue/fournisseur.langue.module').then(m => m.FournisseurLangueModule) },
                    { path: 'fournisseurDevise', loadChildren: () => import('./demo/components/fournisseur.devise/fournisseur.devise.module').then(m => m.FournisseurDeviseModule) },
                    { path: 'fournisseurSousRegion', loadChildren: () => import('./demo/components/fournisseur.sous-region/fournisseur.sous-region.module').then(m => m.FournisseurSousRegionModule) },
                    { path: 'fournisseurVille', loadChildren: () => import('./demo/components/fournisseur.ville/fournisseur.ville.module').then(m => m.FournisseurVilleModule) },
                    { path: 'fournisseurPays', loadChildren: () => import('./demo/components/fournisseur.pays/fournisseur.pays.module').then(m => m.FournisseurPaysModule) },

                    { path: 'modeReglement', loadChildren: () => import('./demo/components/mode-reglement/mode-reglement.module').then(m => m.ModeReglementModule) },
                    { path: 'secteurActivite', loadChildren: () => import('./demo/components/secteur-activite/secteur-activite.module').then(m => m.SecteurActiviteModule) },
                    { path: 'societeParametrageTaxe', loadChildren: () => import('./demo/components/societe-parametrage-taxe/societe-parametrage-taxe.module').then(m => m.SocieteParametrageTaxeModule) },
                    { path: 'typeResponsable', loadChildren: () => import('./demo/components/type-responsable/type-responsable.module').then(m => m.TypeResponsableModule) },
                    { path: 'fournisseurContact', loadChildren: () => import('./demo/components/fournisseur-contact/fournisseur-contact.module').then(m => m.FournisseurContactModule) },
                    { path: 'societe', loadChildren: () => import('./demo/components/societe/societe.module').then(m => m.SocieteModule) },
                    { path: 'typeArticle', loadChildren: () => import('./demo/components/type-article/type-article.module').then(m => m.TypeArticleModule) },
                    { path: 'depot', loadChildren: () => import('./demo/components/depot/depot.module').then(m => m.DepotModule) },
                    { path: 'marqueArticle', loadChildren: () => import('./demo/components/marque-article/marque-article.module').then(m => m.MarqueModule) },
                    { path: 'retenuSource', loadChildren: () => import('./demo/components/retenu-source/retenu-source.module').then(m => m.RetenuModule) },
                    { path: 'stock', loadChildren: () => import('./demo/components/stock/stock.module').then(m => m.StockModule) },
                    { path: 'strategie', loadChildren: () => import('./demo/components/strategie/strategie.module').then(m => m.StrategieModule) },

                    { path: 'fournisseur', loadChildren: () => import('./demo/components/fournisseur/fournisseur.module').then(m => m.FournisseurModule) },
                    { path: 'inventaire', loadChildren: () => import('./demo/components/inventaire/inventaire.module').then(m => m.InventaireModule) },

                    { path: 'client', loadChildren: () => import('./demo/components/client/client.module').then(m => m.ClientModule) },
                    { path: 'rapportGlobale', loadChildren: () => import('./demo/components/rapport-global/rapport-global.module').then(m => m.RapportGlobalModule) },
                    { path: 'articles', loadChildren: () => import('./demo/components/articles/articles.module').then(m => m.ArticlesModule) },
                    { path: 'fournisseurConvention', loadChildren: () => import('./demo/components/fournisseur-convention/fournisseur-convention.module').then(m => m.FournisseurConventionModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
