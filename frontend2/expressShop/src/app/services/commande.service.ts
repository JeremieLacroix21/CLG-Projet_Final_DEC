import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { config } from '../../config';
import { Commandes } from '../models//commandes';
import { CommandesFournisseur } from '../models//commandesFournisseur';

@Injectable({
    providedIn: 'root'
  })
export class CommandeService {

    constructor(private http: HttpClient) {}

    GetCommande(idDistributeur){
      const body = new HttpParams().set('idDistributeur', idDistributeur.toString());
      return this.http.post<Commandes[]>(
        `${config.apiUrl}/api/GetCommandeDistributeur`,
        body.toString(),
        config.headerObject
      );
    }

    GetCommandeFournisseur(idFournisseur){
      const body = new HttpParams().set('idFournisseur', idFournisseur.toString());
      return this.http.post<CommandesFournisseur[]>(
        `${config.apiUrl}/api/GetCommandeFournisseur`,
        body.toString(),
        config.headerObject
      );
    }

    
    CompleteCommande(idcommande){
      const body = new HttpParams().set('idCommande', idcommande.toString())
      return this.http.post(
        `${config.apiUrl}/api/CompleteCommande`,
        body.toString(),
        config.headerObject
      );
    }
}