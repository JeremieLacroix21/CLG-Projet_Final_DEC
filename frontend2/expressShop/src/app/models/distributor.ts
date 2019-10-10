import { BD_User } from './user';
import { productPanier } from './productPanier.entity';

export class Distributor extends BD_User {
    public cart: productPanier[];
}