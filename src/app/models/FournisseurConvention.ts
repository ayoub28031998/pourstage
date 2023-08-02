export interface FournisseurConvention {
    codeFournisseur: string;
    codeRetenuSource: string;
    codeModeReglement: string;
    moyenReglement: number;
    approvisionnerPar: number;
    delaiLivraison: number;
    marge: number;
    tauxRemise: number;
    ristourne: number;
    seuilCredit: number;
    seuilEngagement: number;
  }