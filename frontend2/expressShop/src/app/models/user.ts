export const SUPPLIER = "Fournisseur";
export const DISTRIB = "Distributeur";
export const ADMIN = "Admin";

export class BD_User {
    public iduser: number;
    public nomutilisateur: string;
    public nom: string;
    public prenom: string;
    public TypeUser: string;
    public confirme: boolean;
    public dateinscription: string;
    public email: string;
    public telephone: string;
}