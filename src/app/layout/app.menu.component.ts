import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Planing',
                items: [
                    { label: 'Planing Hotel', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/'] }
                ]
            },
            {
                label: 'Articles',
                items: [
                    { label: 'Articles', icon: 'pi pi-fw pi-book ', routerLink: ['/articles'] }
                ]
            },
            {
                label: 'Rapport',
                items: [
                    { label: 'Rapport Global', icon: 'pi pi-fw pi-book ', routerLink: ['/rapportGlobale'] }
                ]
            },
            {
                label: 'client',
                items: [
                    { label: 'Client', icon: 'pi pi-fw pi-book ', routerLink: ['/client'] }
                ]
            },
            {
                label: 'Fournisseur',
                items: [
                    { label: 'Fournisseur', icon: 'pi pi-fw pi-book ', routerLink: ['/fournisseur'] },
                    { label: 'Pays', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/fournisseurPays'] },
                    { label: 'Ville', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/fournisseurVille'] },
                    { label: 'SousRegion', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/fournisseurSousRegion'] },
                    { label: 'Devise', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/fournisseurDevise'] },
                    { label: 'Langue', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/fournisseurLangue'] },
                    { label: 'Profession Contrat', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/fournisseurProfessionContrat'] },

                ]
            },
            {
                label: 'Fournisseur Finance',
                items: [
                    { label: 'Fournisseur Finance', icon: 'pi pi-fw pi-book ', routerLink: ['/fournisseurFinance'] }
                ]
            },
            {
                label: 'Inventaire',
                items: [
                    { label: 'Inventaire', icon: 'pi pi-fw pi-book ', routerLink: ['/inventaire'] }
                ]
            },
            {
                label: 'Fournisseur Convention',
                items: [
                    { label: 'Fournisseur Convention', icon: 'pi pi-fw pi-book ', routerLink: ['/fournisseurConvention'] }
                ]
            },
            {
                label: 'Mode de Reglement',
                items: [
                    { label: 'Mode de Reglement', icon: 'pi pi-fw pi-book ', routerLink: ['/modeReglement'] }
                ]
            },
            {
                label: 'Secteur d\'activité',
                items: [
                    { label: 'Secteur d\'activité', icon: 'pi pi-fw pi-book ', routerLink: ['/secteurActivite'] }
                ]
            },
            {
                label: 'Societé Parametrage Taxe',
                items: [
                    { label: 'Societé Parametrage Taxe', icon: 'pi pi-fw pi-book ', routerLink: ['/societeParametrageTaxe'] }
                ]
            },
            {
                label: 'Societé',
                items: [
                    { label: 'Societé', icon: 'pi pi-fw pi-book ', routerLink: ['/societe'] }
                ]
            },
            {
                label: 'Type Article',
                items: [
                    { label: 'Type Article', icon: 'pi pi-fw pi-book ', routerLink: ['/typeArticle'] }
                ]
            },
            {
                label: 'Marque Article',
                items: [
                    { label: 'Marque Article', icon: 'pi pi-fw pi-book ', routerLink: ['/marqueArticle'] }
                ]
            },
            {
                label: 'Retenu à la Source',
                items: [
                    { label: 'Retenu à la Source', icon: 'pi pi-fw pi-book ', routerLink: ['/retenuSource'] }
                ]
            },
            {
                label: 'Depot ',
                items: [
                    { label: 'Depot', icon: 'pi pi-fw pi-book ', routerLink: ['/depot'] }
                ]
            },
            {
                label: 'Stock ',
                items: [
                    { label: 'Stock', icon: 'pi pi-fw pi-book ', routerLink: ['/stock'] }
                ]
            },
            {
                label: 'Strategie ',
                items: [
                    { label: 'Strategie', icon: 'pi pi-fw pi-book ', routerLink: ['/strategie'] }
                ]
            },
        //     {
        //         label: 'UI Components',
        //         items: [
        //             { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
        //             { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
        //             { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
        //             { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
        //             { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
        //             { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
        //             { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
        //             { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
        //             { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
        //             { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
        //             { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
        //             { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
        //             { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
        //             { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
        //             { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
        //             { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
        //         ]
        //     },
        //     {
        //         label: 'Prime Blocks',
        //         items: [
        //             { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
        //             { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
        //         ]
        //     },
        //     {
        //         label: 'Utilities',
        //         items: [
        //             { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
        //             { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
        //         ]
        //     },
        //     {
        //         label: 'Pages',
        //         icon: 'pi pi-fw pi-briefcase',
        //         items: [
        //             {
        //                 label: 'Landing',
        //                 icon: 'pi pi-fw pi-globe',
        //                 routerLink: ['/landing']
        //             },
        //             {
        //                 label: 'Auth',
        //                 icon: 'pi pi-fw pi-user',
        //                 items: [
        //                     {
        //                         label: 'Login',
        //                         icon: 'pi pi-fw pi-sign-in',
        //                         routerLink: ['/auth/login']
        //                     },
        //                     {
        //                         label: 'Error',
        //                         icon: 'pi pi-fw pi-times-circle',
        //                         routerLink: ['/auth/error']
        //                     },
        //                     {
        //                         label: 'Access Denied',
        //                         icon: 'pi pi-fw pi-lock',
        //                         routerLink: ['/auth/access']
        //                     }
        //                 ]
        //             },
        //             {
        //                 label: 'Crud',
        //                 icon: 'pi pi-fw pi-pencil',
        //                 routerLink: ['/pages/crud']
        //             },
        //             {
        //                 label: 'Timeline',
        //                 icon: 'pi pi-fw pi-calendar',
        //                 routerLink: ['/pages/timeline']
        //             },
        //             {
        //                 label: 'Not Found',
        //                 icon: 'pi pi-fw pi-exclamation-circle',
        //                 routerLink: ['/notfound']
        //             },
        //             {
        //                 label: 'Empty',
        //                 icon: 'pi pi-fw pi-circle-off',
        //                 routerLink: ['/pages/empty']
        //             },
        //         ]
        //     },
        //     {
        //         label: 'Hierarchy',
        //         items: [
        //             {
        //                 label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                     {
        //                         label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
        //                         ]
        //                     },
        //                 ]
        //             },
        //             {
        //                 label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                     {
        //                         label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         label: 'Get Started',
        //         items: [
        //             {
        //                 label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
        //             },
        //             {
        //                 label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
        //             }
        //         ]
        //     }
        ];
    }
}
