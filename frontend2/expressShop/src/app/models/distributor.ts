import { BD_User } from './user';
import { productPanier } from './productPanier.entity';
import { Injectable } from '@angular/core';


@Injectable(
    {providedIn: 'root'}
)
export class Distributor extends BD_User {
    public cart: productPanier[];
}