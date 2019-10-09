import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, Subscriber } from 'rxjs';
import { BD_User } from '../models/user';
import { config } from '../../config';

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

  updateConfirmRegistration(iduser: number, confirmRegistration: boolean) {
    const body = new HttpParams()
      .set('iduser', iduser.toString())
      .set('confirme', confirmRegistration.toString());

    return this.http.put(
      `${config.apiUrl}/api/UpdateConfirmRegistration`,
      body.toString(),
      config.headerObject
    );
  }

  deleteUser(iduser:number) {
    const body = new HttpParams()
      .set('iduser', iduser.toString());

    return this.http.put(
      `${config.apiUrl}/api/DeleteUser`,
      body.toString(),
      config.headerObject
    );
  }
  UpdatePassword(iduser:number,NouveauMotdePasse:number)
  {
      const body = new HttpParams().set('IdUser', iduser.toString()).set('NouveauMotDePasse',NouveauMotdePasse.toString());
      return this.http.post(`${config.apiUrl}/api/UpdatePassword`,
      body.toString(),
      config.headerObject);
  }
}
