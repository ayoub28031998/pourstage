export interface ListePays{
    code?:string;
    referenceTel?:string;
    devise?:string;
    pays?:string

}
export interface Ville{
    code?:string;
    ville?:string;
}
export interface SousRegion{
 code?:string;
 sousRegion?:String;
}
export interface Devise{
    code?:string;
    devise?:string;
    cout?:string;
}
export interface Langue {
    codeLangue?:string;
    designationLangue?:string;
}
export interface ProfessionContrat{
    codeProfession?:string;
    profession?:string;
}
export interface FournisseurContactGrid{
    profession?:string;
    contact?:string;
    telephone?:string;
    fax?:string;
    email?:string;
}
export interface FournisseurBanque{
    codeBanque?:string;
    banque?:string;
    RIB?:string;  
}