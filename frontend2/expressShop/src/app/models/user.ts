export const SUPPLIER = "Fournisseur";
export const DISTRIB = "Distributeur";
export const ADMIN = "Admin";
export const VISIT = "Visiteur";

export class BD_User {
    public iduser: number;
    public nomutilisateur: string;
    public nom: string;
    public prenom: string;
    public TypeUser: string;
    public adresse: string;
    public admin:string;
    public confirme: boolean;
    public dateinscription: string;
    public email: string;
    public Telephone: string;
    public description: string;
    public imgGUID:string;
}