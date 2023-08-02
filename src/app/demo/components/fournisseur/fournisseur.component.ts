import { Component,  OnInit,  Input,ElementRef, Renderer2 } from '@angular/core';
import { SimpleModalOptions,  defaultSimpleModalOptions } from 'ngx-simple-modal';
import { Fournisseur } from 'src/app/models/Fournisseur';
import { FournisseurService } from '../../service/fournisseur.service';
import { Table } from 'primeng/table';
import { InformationfournisseurInterface } from '../../api/informationFournisseur';
import { Client2Service } from '../../service/client2.service';
import { villeService } from '../../service/ville.service';
import { regionService } from '../../service/region.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { log } from 'console';
import { FournisseurBanque, FournisseurContactGrid } from 'src/app/models/fournisseurDetails';
import { Article } from 'src/app/models/Article';
import { ArticleService } from '../../service/article.service';

interface SousFamille{
  code?: string;
  libelle?: string;
}
interface ArticleFournisseur{
  code?: string;
  designation?: string;
  prixAHT?: string;
}


interface Banque {
  id?: string;
  name?: string;
}

interface Item {
  id?: number;
  name?: string;
  // Ajoutez d'autres propriétés si nécessaire
}
interface Column {
  field: string;
  header: string;
}
interface dropdownpro{
  label: string;
  value: string;
}

interface Vente {
  id: number;
  type: string;
  marge: string;
}
@Component({
  selector: 'app-secteur-activite',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss'],

})
export class FournisseurComponent implements OnInit{
    
  
  
  selectedItem: Item={};
    filteredItems: Item[] = [];

    items: Item[] = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      // Ajoutez d'autres éléments si nécessaire
    ];
    
    SelectedTypes: any[] = [];
    typesFournisseur: any[] = [];
    displayDialog: boolean = false;
    filteredTypes: any[]=[];
    valImport:string="";
    valRadio: string = 'payeTva';

  isFieldsDisabled: boolean = false;
   sousFamilles!: SousFamille[];
   SelectedsousFamilles!: SousFamille[];
  uploadedFiles: any[] = [];
  etrange:boolean=false;
  fournisseur!: Fournisseur[];
  changement:boolean=false;
  fournisseurs: Fournisseur[] = [];
  cols!: Column[];
  selectedFournisseur!: Fournisseur;
  _selectedColumns!: Column[];
  fournisseurDialog = false;
  searchKeyword: string = '';
  modalOptions: SimpleModalOptions = defaultSimpleModalOptions;
  confirmationService: any;
  products: any;
  selectedProducts: any;
  newFournisseur: FournisseurContactGrid = {
    profession: '',
    contact: '',
    telephone: '',
    fax: '',
    email: '',
  };
  newArticle: ArticleFournisseur = {
    code: '',
    designation: '',
    prixAHT: '',  
  };
  newFournisseurBanque: FournisseurBanque = {
    codeBanque: '',
    banque: '',
    RIB: '', 
  };
  professions: dropdownpro[] = [];
  Dropbanques: Banque  [] = [];
  fournisseurContactGrid: FournisseurContactGrid[] = [];
  fournisseurBanque: FournisseurBanque[] = [];
  articlefournisseur: ArticleFournisseur[]=[];
  articles:Article[]= [];
  codeArticles: string[] = [];
  constructor(private articleService: ArticleService,private fournisseurService: FournisseurService,private client2Service:Client2Service,private villeService:villeService, private regionServive:regionService,private elementRef: ElementRef,private messageService: MessageService, private renderer: Renderer2 ) {
  }
  onRowSelect(event: any) {
    console.log(this.selectedFournisseur);
  }
  ngOnInit() {

   
    
    this.fournisseurService.getType().then(types=>{
      this.typesFournisseur=types;
       console.log(this.typesFournisseur);

     })


     this.articleService.getArticles().then((articles) => {
      this.articles = articles;
  });
     this.codeArticles = this.articles.map(article => article.codeArticle);
     console.log(this.articles);
     console.log('liste des codes articles : '+this.codeArticles);



    this.setAutocompleteHeight('25px');
    this.fournisseurService.getFournisseurs().then((fournisseur: Fournisseur[]) => {
      this.fournisseur = fournisseur.map((fournisseur: Fournisseur) => {
        return { ...fournisseur, solde: 0 };
      });
      console.log(this.fournisseur);
    });
    this.cols = [
      { field: 'raisonSociale', header: 'Raison sociale' },
      { field: 'matriculeFiscale', header: 'Matricule Fiscale' },
      { field: 'tel1', header: 'Téléphone' },
      { field: 'adresse1', header: 'Adresse' },
      { field: 'codeVille', header: 'Ville' },
      { field: 'solde', header: 'Solde' }
    ];
      this._selectedColumns = this.cols;
 this.client2Service.getClient2().then(client2=>{
  this.client2List=client2;
  console.log(client2);

 });

 this.regionServive.getregion().then(region=>{
  this.regionList=region;
  console.log(region);

 }); this.villeService.getville().then(ville=>{
  this.villeList=ville;
  console.log(ville);

 });

 const newFournisseur: FournisseurContactGrid = {
  profession: '',
  contact: '',
  telephone: '',
  fax: '',
  email: '',    
};
this.fournisseurContactGrid.push(newFournisseur);

const newFournisseurBanque: FournisseurBanque = {
  codeBanque: '',
  banque:'',
  RIB: '',   
};
this.fournisseurBanque.push(newFournisseurBanque);
const newArticle: ArticleFournisseur = {
  code: '',
  designation: '',
  prixAHT: '',
};
this.articlefournisseur.push(newArticle);



this.professions = [
  { label: 'Gerant', value: 'gerant' },
  { label: 'Financier', value: 'financier' },
];


this.sousFamilles = [
  {code:'001' , libelle:'SF1'},
  {code:'002' , libelle:'SF2'},
  {code:'003' , libelle:'SF3'},
  {code:'004' , libelle:'SF4'},
]
this.Dropbanques = [
  {id:'001' , name:'ATB'},
  {id:'002' , name:'BNA'},
  {id:'003' , name:'BIAT'},
  {id:'004' , name:'BTK'},
]
    }
    searchItems(event: any) {
      const query = event.query;
      this.filteredItems = this.items.filter(item => item.name?.toLowerCase().includes(query.toLowerCase()));
    }
    showDetails() {
      this.displayDialog = true;
    }

  @Input() get selectedColumns(): any[] {
      return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
      //restore original order
      this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }

    clear(table: Table) {
    table.clear();
    this.searchKeyword = '';
  }

  deleteSelectedFournisseur() {
    console.log("test");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected fournisseur?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.fournisseur = this.fournisseur.filter(
          (f: Fournisseur) => f !== this.selectedFournisseur
        );
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Fournisseur Deleted',
          life: 3000
        });
      }
    });
  }
  async fetchFournisseurs() {
    this.fournisseurs = await this.fournisseurService.getFournisseurs();
  }
//fournisseurGrid
  ajouterFournisseur() {       
    this.fournisseurContactGrid.push(this.newFournisseur);
      this.newFournisseur = {
        profession: '',
        contact: '',
        telephone: '',
        fax: '',
        email: '',    
    };     
   
          setTimeout(() => {
            this.setFocusOnProfessionInput();
          });
}
onEditComplete() {
  // Vérifier si la dernière ligne est remplie avant d'ajouter une nouvelle ligne
  const lastFournisseur = this.fournisseurContactGrid[this.fournisseurContactGrid.length - 1];
  if (
    lastFournisseur.profession &&
    lastFournisseur.contact &&
    lastFournisseur.telephone &&
    lastFournisseur.fax &&
    lastFournisseur.email  !== undefined
  ) {
    this.ajouterFournisseur();
  }
  console.log(this.fournisseurContactGrid)
}
setFocusOnProfessionInput() {
  const professionInput = this.renderer.selectRootElement('.profession-input');
  if (professionInput) {
    professionInput.focus();
  }
}
//FournisseurBanque

ajouterFournisseurBanque() {
  const lastFournisseurBanque = this.fournisseurBanque[this.fournisseurBanque.length - 1];
  if (this.isFournisseurBanqueValid(lastFournisseurBanque)) {
    this.fournisseurBanque.push(this.newFournisseurBanque);
    this.newFournisseurBanque = {
      codeBanque: '',
      banque: '',
      RIB: '',   
    };
    setTimeout(() => {
      this.setFocusOnBanqueInput();
    });
  }
}
isFournisseurBanqueValid(fournisseurBanque: FournisseurBanque): boolean {
  // Add any additional validation logic here.
  return !!(fournisseurBanque && fournisseurBanque.codeBanque && fournisseurBanque.RIB);
}
setFocusOnBanqueInput() {
  const banqueInput = this.renderer.selectRootElement('.banque-input');
  if (banqueInput) {
    banqueInput.focus();
  }
}
getBanqueName(code: string): string {
  const selectedBanque = this.Dropbanques.find(banque => banque.id === code);
  return selectedBanque?.name || ''; // Use optional chaining (?.) and provide a default value ('') when selectedBanque is undefined
}


  // travail Alaa
  selectedState: any = null;
  InformationFournisseur: InformationfournisseurInterface = {};
  valCheck: string[] = [];



  submitted:boolean=false;


  filteredclient2:any[]= [];
  selectedclient2Advanced: any[] = [];
  client2List: any[] = [];

  filteredville:any[]= [];
  selectedvilleAdvanced: any[] = [];
  villeList: any[] = [];

  filteredregion:any[]= [];
  selectedregionAdvanced: any[] = [];
  regionList: any[] = [];

  imageUploaded: string = '';
  dropdownItems:any[]=[];

  showConfirmation: boolean = false;
  //villeService: any;
//client2List: any;

  cancel() {
    this.close();
  }
  close() {
    throw new Error('Method not implemented.');
  }
  confirm() {

      console.log(this.InformationFournisseur);
      this.submitted=true;

    this.close();
  }
  onBasicUpload(event:any) {
    const response = JSON.parse(event.xhr.response);
    this.imageUploaded = response.url; // Assuming the server response contains the URL of the uploaded image
  }
  toggleConfirmation(){}


  onRadioChange() {
    console.log(this.valRadio);

    this.isFieldsDisabled = this.valRadio === 'exonore'; // Disable fields if 'payeTva' is selected
  }
 
filterclient2(event: any) {
  const filtered: any[] = [];
  const query = event.query;
  for (let i = 0; i < this.client2List.length; i++) {
      const client2 = this.client2List[i];
      if (client2.designationclient.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(client2);
      }
  }

  this.filteredclient2= filtered;
}
filterville(event: any) {
  const filtered: any[] = [];
  const query = event.query;
  for (let i = 0; i < this.villeList.length; i++) {
      const ville= this.villeList[i];
      if (ville.designationville.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(ville);
      }
  }

  this.filteredville= filtered;
}

filterregion(event: any) {
  const filtered: any[] = [];
  const query = event.query;
  for (let i = 0; i < this.regionList.length; i++) {
      const region= this.regionList[i];
      if (region.designationregion.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(region);
      }
  }

  this.filteredregion= filtered;
}
setDividerStyle(marginTop: string) {
    this.elementRef.nativeElement.style.setProperty('--my-divider-margin-top', marginTop);
  }


setAutocompleteHeight(height: string) {
    this.elementRef.nativeElement.style.setProperty('--my-autocomplete-height', height);
  }
  onUpload(event: any) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
}
selectedImage: any;
onSelect(event: any) {
  if (event.files && event.files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
    };
    reader.readAsDataURL(event.files[0]);
  }
}


ventes: Vente[] = [
  { id: 1, type: 'Vente 1', marge: "" },
  { id: 2, type: 'Vente 2', marge: "" },
  { id: 3, type: 'Vente 3', marge: "" },
  { id: 4, type: 'Vente 4', marge: "" },
  { id: 5, type: 'Vente 5', marge: "" },
  { id: 6, type: 'Vente 6', marge: "" },
  // Ajoutez d'autres éléments de vente ici
];

selectedVente: Vente | null = null;

onCellClick(vente: Vente): void {
  this.selectedVente = vente;
}

onCellBlur(): void {
  this.selectedVente = null;
}
onTabPressed(rowIndex: number): void {
  // Move focus to the next row's input field
  const nextRowIndex = (rowIndex + 1) % this.ventes.length;
  const nextRowInput = document.querySelector(`[data-ri="${nextRowIndex}"] input`);
  if (nextRowInput) {
    (nextRowInput as HTMLElement).focus();
  }
}




filterTypes(event: any) {
  const filtered: any[] = [];
  const query = event.query;
  for (let i = 0; i < this.typesFournisseur.length; i++) {
      const types = this.typesFournisseur[i];
      if (types.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(types);
      }
  }

  this.filteredTypes = filtered;
}

  onEditCompleteBanque() {
    // Vérifier si la dernière ligne est remplie avant d'ajouter une nouvelle ligne
    const lastFournisseurBanque = this.fournisseurBanque[this.fournisseurBanque.length - 1];
    if (lastFournisseurBanque.RIB && lastFournisseurBanque.codeBanque !== undefined) {
      // Check if the last row is valid before adding a new row
      this.ajouterFournisseurBanque();
    }
    console.log(this.fournisseurBanque);
  }



  ajouterArticle() {       
    this.articlefournisseur.push(this.newArticle);
      this.newArticle = {
        code: '',
        designation: '',
        prixAHT: '',      
    };     
   
          setTimeout(() => {
            this.setFocusOnPrixInput();
          });
}
onEditCompleteArticle() {
  // Vérifier si la dernière ligne est remplie avant d'ajouter une nouvelle ligne
  const lastArticle = this.articlefournisseur[this.articlefournisseur.length - 1];
  if (
    lastArticle.code &&
   
    lastArticle.prixAHT 
      !== undefined
  ) {
    this.ajouterArticle();
  }
  console.log(this.articlefournisseur)
}
setFocusOnPrixInput() {
  const professionInput = this.renderer.selectRootElement('.prixAHT-input');
  if (professionInput) {
    professionInput.focus();
  }
}
getDesignationByCode(code: string): string {
  const selectedArticle = this.articles.find((article) => article.codeArticle === code);
  return selectedArticle ? selectedArticle.designationArticle : '';
}

}






