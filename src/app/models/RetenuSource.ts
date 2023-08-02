export interface RetenuSource {
    codeRetenu: string;
    libelleRetenu: string;
    tauxRetenu: number;
    retenuTTC: boolean;
    retenuTVA: boolean;
    actif: boolean;
    dateCreation: Date;
    creerPar: string;
}