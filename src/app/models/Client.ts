export interface Client {
    codeClient: string;
    codeFamilleClient: string;
    numeroCompte: string;
    raisonSociale: string;
    codeSecteurActivite: string;
    indentiterObligatoire: boolean;
    matriculeFiscale: string;
    registreCommerce: string;
    numeroExport: string;
    codeDevise: string;
    codeLangue: string;
    codePays: string;
    codeCommercial: string;
    codeZoneCommercial: string;
    codeVille: string;
    codeSousRegion: string;
    codePostal: string;
    adresse: string;
    multiAdresse: boolean | null;
    tel1: string;
    tel2: string;
    tel3: string;
    mail1: string;
    mail2: string;
    siteWeb: string;
    nomGerant: string;
    capital: number;
    cin: string;
    dateOuverture: string;
    actif: boolean;
    blocageVente: boolean | null;
    contentieux: boolean;
    codeRetenuSource: string;
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
  