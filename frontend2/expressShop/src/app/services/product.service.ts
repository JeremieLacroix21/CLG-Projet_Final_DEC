import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../config';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(
      `${config.apiUrl}/api/GetAllProducts`,
      { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') }
    );
  }

  search(/*search params*/) {
    // call api/SearchProducts
    return null;
  }
}
