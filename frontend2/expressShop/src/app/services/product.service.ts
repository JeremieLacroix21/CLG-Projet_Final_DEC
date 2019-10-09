import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../config';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { productPanier } from '../models/productPanier.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

  getbyname(name:string){
    return this.getAll().pipe(map(loadedProducts => loadedProducts.filter(load => load.nom === name)));
  }

  search(/*search params*/) {
    // call api/SearchProducts
    return null;
  }

  
  AddProductToCart(iduser:number,idproduit:number,qty:number)
  { 
      const body = new HttpParams().set('iduser', iduser.toString()).set('idproduit',idproduit.toString()).set('quantity',qty.toString());
      return this.http.post(`${config.apiUrl}/api/AddProductToPanier`, body.toString(), config.headerObject);
  }

  DeleteProductFromCart(iduser:number,idproduit:number)
  {
      const body = new HttpParams().set('iduser', iduser.toString()).set('idproduit',idproduit.toString());
      return this.http.post(`${config.apiUrl}/api/DeleteProductFromCart`, body.toString(), config.headerObject);
  }

  
  UpdateQuantityPanier(iduser:number,idproduit:number,qty:number)
  { 
      const body = new HttpParams().set('iduser', iduser.toString()).set('idproduit',idproduit.toString()).set('quantity',qty.toString());
      return this.http.post(`${config.apiUrl}/api/UpdateQuantityPanier`, body.toString(), config.headerObject);
  }
}
