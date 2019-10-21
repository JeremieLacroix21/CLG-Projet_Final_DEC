import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../config';
import { Product } from '../models/product';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { productPanier } from '../models/productPanier.entity';

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

  AddComande(idproduit)
  {
    const body = new HttpParams()
      .set('idproduits', idproduit.toString())
      return this.http.post(
        `${config.apiUrl}/api/GetProduitsFromPanier`,
        body.toString(),
        config.headerObject
      );
  }
}
