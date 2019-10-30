import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { config } from '../../config';
import { Product } from '../models/product';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { productPanier } from '../models/productPanier.entity';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private nbCartItemsSource = new Subject<number>();

  nbCartItems = this.nbCartItemsSource.asObservable();

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(
      `${config.apiUrl}/api/GetAllProducts`,
      config.headerObject
    );
  }

  GetpanierFromId(iduser:number)
  {
    const body = new HttpParams().set('iduser', iduser.toString());
    return this.http.post<productPanier[]>(
      `${config.apiUrl}/api/GetpanierFromId`, body.toString(),
      config.headerObject);
  }

  RefreshCartItemCount(nbItems: number) {
    this.nbCartItemsSource.next(nbItems);
  }

  getbyname(name:string){
    return this.getAll().pipe(map(loadedProducts => loadedProducts.filter(load => load.nom === name)));
  }

  search(/*search params*/) {
    // call api/SearchProducts
    return null;
  }

  AddProductToCart(iduser:number, idproduit:number, qty:number)
  {
    const body = new HttpParams()
      .set('iduser', iduser.toString())
      .set('idproduit',idproduit.toString())
      .set('quantity',qty.toString());
    
    return this.http.post(
      `${config.apiUrl}/api/AddProductToPanier`,
      body.toString(),
      config.headerObject
    );
  }

  DeleteProductFromCart(iduser:number,idproduit:number)
  {
    const body = new HttpParams()
      .set('iduser', iduser.toString())
      .set('idproduit',idproduit.toString());

    return this.http.put(
      `${config.apiUrl}/api/DeleteProductFromPanier`,
      body.toString(),
      config.headerObject
    );
  }

  UpdateQuantityPanier(iduser:number,idproduit:number,qty:number)
  { 
    const body = new HttpParams()
      .set('iduser', iduser.toString())
      .set('idproduit',idproduit.toString())
      .set('quantity',qty.toString());

    return this.http.put(
      `${config.apiUrl}/api/UpdateQuantityPanier`,
      body.toString(),
      config.headerObject
    );
  }

  GetFournisseurPanier(idproduit) {
    const body = new HttpParams()
      .set('idproduits', idproduit.toString());

    return this.http.post(
      `${config.apiUrl}/api/GetFournisseurParCommande`,
      body.toString(),
      config.headerObject
    );
  }

  CreationCommmande(idFournisseur, idDistributeur)
  {
    const body = new HttpParams()
      .set('idFournisseur', idFournisseur.toString())
      .set('idDistributeur', idDistributeur.toString())
      .set('complete', "0")
      .set('dateCreation', formatDate(new Date(), 'yyyy/MM/dd', 'en'))

      return this.http.post(
        `${config.apiUrl}/api/InsertCommande`,
        body.toString(),
        config.headerObject
      );
  }

  CreationCommandeItems(idCommande,idproduit,quantite)
  {
    const body = new HttpParams()
    .set('idCommande', idCommande.toString())
    .set('idProduit', idproduit.toString())
    .set('quantite', quantite.toString())

    return this.http.post(
      `${config.apiUrl}/api/InsertCommandeItems`,
      body.toString(),
      config.headerObject
    );
  }

  EnvoieCommande(idFournisseur, idDistributeur) {
    const body = new HttpParams()
      .set('idFournisseur', idFournisseur.toString())
      .set('idDistributeur', idDistributeur.toString());

    return this.http.post(
      `${config.apiUrl}/api/EnvoieCommande`,
      body.toString(),
      config.headerObject
    );
  }

  AddProduct(nom:string,prix:number,idFournisseur:number,enStock:number,imgGuid:string,
    description:string,tags:string){
      const body = new HttpParams()
    .set('nom', nom.toString())
    .set('prix', prix.toString())
    .set('idFournisseur', idFournisseur.toString())
    .set('enStock', enStock.toString())
    .set('imgGUID', imgGuid.toString())
    .set('description', description.toString())
    .set('Tags', tags.toString())
    return this.http.post(
      `${config.apiUrl}/api/AddProduct`,
      body.toString(),
      config.headerObject
    );

  }
}
