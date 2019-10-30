import { CommandesItems } from './commandesItems';

export class CommandesFournisseur {
    idCommande : number;
    idFournisseur: number;
    nomDistributeur: string;
    idDistributeur: number;
    dateCreation: string;
    complete: number;
    EstOuvert : boolean;
    EmailDistributeur : string;
    telephone : string;
    TableItem : CommandesItems[]
    constructor() { 
    }
}