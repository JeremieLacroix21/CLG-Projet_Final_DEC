import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, Subscriber } from 'rxjs';
import { BD_User } from '../models/user';
import { config } from '../../config';
import { Supplier } from '../models/supplier';
import { N } from '@angular/cdk/keycodes';
import { LogItem } from '../models/log-item';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<BD_User[]>(
      `${config.apiUrl}/api/GetAllUsers`,
      config.headerObject
    );
  }

  getAllSuppliers() {
    return this.http.get<Supplier[]>(
      `${config.apiUrl}/api/GetAllSuppliers`,
      config.headerObject
    );
  }

  updateConfirmRegistration(iduser: number, confirmRegistration: boolean) {
    const body = new HttpParams()
      .set('iduser', iduser.toString())
      .set('confirme', confirmRegistration.toString());
    return this.http.post(
      `${config.apiUrl}/api/UpdateConfirmRegistration`,
      body.toString(),
      config.headerObject
    );
  }

  deleteUser(iduser:number) {
    const body = new HttpParams()
      .set('iduser', iduser.toString());
    return this.http.post(
      `${config.apiUrl}/api/DeleteUser`,
      body.toString(),
      config.headerObject
    );
  }

  UpdatePassword(iduser:number,NouveauMotdePasse:number)
  {
      const body = new HttpParams()
      .set('iduser', iduser.toString())
      .set('nouveaumotdepasse',NouveauMotdePasse.toString());
      return this.http.post(`${config.apiUrl}/api/UpdatePassword`,
      body.toString(),
      config.headerObject
      );
  }

  UpdateUser(iduser:number,nomutilisateur:string,courriel:string,téléphone:string,description:string)
  {
    console.log("update");
    const body = new HttpParams()
    .set('iduser',iduser.toString())
    .set('nomutilisateur',nomutilisateur)
    .set('email',courriel)
    .set('Telephone',téléphone)
    .set('description',description);
    return this.http.post(`${config.apiUrl}/api/UpdateUser`,
    body.toString(),
    config.headerObject
    );
  }

  GetUserInformation(iduser:number)
  {
    const body = new HttpParams()
    .set('iduser',iduser.toString());
    return this.http.post<BD_User[]>(
      `${config.apiUrl}/api/GetUserInformation`,
      body.toString(),
      config.headerObject
    );
  }

  getLogs() {
    return this.http.get<LogItem[]>(
      `${config.apiUrl}/api/GetLogs`,
      config.headerObject
    )
  }

  UpdateRating(iduser:number,idfournisseur:number,rating:number)
  {
    
    const body = new HttpParams()
    .set('iduser',iduser.toString())
    .set('idfournisseur',idfournisseur.toString())
    .set('rating',rating.toString());
    return this.http.post(`${config.apiUrl}/api/UpdateRating`,
    body.toString(),
    config.headerObject
    );
  }


  GetFavoriteSuppliers(iduser:number)
    {
      const body = new HttpParams()
      .set('iduser',iduser.toString());
      return this.http.post<BD_User[]>(
        `${config.apiUrl}/api/GetFavoriteSuppliers`,
        body.toString(),
        config.headerObject
      );
    }
}
