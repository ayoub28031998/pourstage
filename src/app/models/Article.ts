export interface Article {
    codeArticle: string;
    designationArticle: string;
    referenceArticle: string;
    codeFournisseur: string;
    codeGroupeArticle: string;
    codeFamilleArticle: string;
    codeSousFamilleArticle: string;
    codeMarqueArticle: string;
    codeTypeArticle: string;
    codeComptableAchat: string;
    codeComptableVente: string;
    codeTva: string;
    margeSecurite: number;
    actif: boolean;
    stockable: boolean;
    destinationAchat: boolean;
    destinationVente: boolean;
    commercial: boolean;
    economat: boolean;
    immobilisation: boolean;
    service: boolean;
    noteAfficher: string;
    observation: string;
    dateCreation: Date;
    creerPar: string;
    valider: boolean;
    dateValidation: string;
    validerPar: string;
    dateDerniereModification: Date;
    derniereModificationPar: string;
  }
  