export interface FournisseurFinance {
    codeFournisseur: string;
    payerTva?: boolean | null;
    exonorer: boolean;
    exportIndirect: boolean;
    etranger: boolean;
    fodec: boolean;
    tpe: boolean;
    tpe2: boolean;
    avanceSurImpot: boolean;
    droitConsomation: boolean;
    timbreFiscal?: boolean | null;
    dateDerniereModification: Date;
    derniereModificationPar: string;
    }