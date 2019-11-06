import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { config } from '../../config';

@Injectable({
    providedIn: 'root'
  })
export class AboutService {

    constructor(private http: HttpClient) {}

    SendMessageToAdmin(name, email, message){
        const sendemail = new HttpParams().set('Nom', name)
        .set('message', message).set('email', email);
        return this.http.post(
          `http://127.0.0.1:8000/api/EnvoieMessage`,
          sendemail.toString(),
          config.headerObject);
    }
}