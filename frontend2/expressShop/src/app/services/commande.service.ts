import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { config } from '../../config';
import { Product } from '../models/product';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Commandes } from '../models//commandes';
import {formatDate} from '@angular/common';

@Injectable({
    providedIn: 'root'
  })
export class CommandeService {

    constructor(private http: HttpClient) {}

    GetCommande(idDistributeur, Encours){
        const body = new HttpParams().set('idDistributeur', idDistributeur.toString())
        .set('Encours', Encours);
    return this.http.post<Commandes[]>(
      `${config.apiUrl}/api/GetCommandes`, body.toString(),
      config.headerObject);
    }
}