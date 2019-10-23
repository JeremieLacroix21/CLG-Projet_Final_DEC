import { CommandesItems } from './commandesItems';

export class Commandes {
    idCommande : number;
    idFournisseur: number;
    nomFournisseur: string;
    idDistributeur: number;
    DateCreation: string;
    complete: number;
    EstOuvert : boolean;
    EmailFournisseur : string;
    telephone : string;
    TableItem : CommandesItems[]
}