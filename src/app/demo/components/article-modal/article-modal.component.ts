import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Article } from 'src/app/models/Article';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article-modal',
  templateUrl: './article-modal.component.html',
  styleUrls: ['./article-modal.component.scss']
})
export class ArticleModalComponent extends SimpleModalComponent<Article, any> implements Article {
  codeArticle: string="";
  designationArticle: string="";
  referenceArticle: string="";
  codeFournisseur: string="";
  codeGroupeArticle: string="";
  codeFamilleArticle: string="";
  codeSousFamilleArticle: string="";
  codeMarqueArticle: string="";
  codeTypeArticle: string="";
  codeComptableAchat: string="";
  codeComptableVente: string="";
  codeTva: string="";
  margeSecurite: number=0;
  actif!: boolean;
  stockable!: boolean;
  destinationAchat!: boolean;
  destinationVente!: boolean;
  commercial!: boolean;
  economat!: boolean;
  immobilisation!: boolean;
  service!: boolean;
  noteAfficher: string="";
  observation: string="";
  dateCreation: Date=new Date();
  creerPar: string="";
  valider!: boolean;
  dateValidation: string="";
  validerPar: string="";
  dateDerniereModification: Date =new Date();
  derniereModificationPar: string="";

  constructor(private articleService: ArticleService){
    super();
  }
   cancel() {
     this.result = null;
     this.close();
   }
 
   confirm() {
   console.log(this.codeArticle);
     this.articleService.deleteArticle(this);
     this.close();
   }
}
