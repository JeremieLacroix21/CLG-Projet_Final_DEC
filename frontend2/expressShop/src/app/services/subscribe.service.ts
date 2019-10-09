import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from '../../config';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class subscribeservice {
  constructor(private http: HttpClient) {
}

  uploadImage(Images: File) {
    const Image = new FormData();
    Image.append('Image', Images);
    return this.http.post(`${config.apiUrl}/api/AddImage`, Image);
  }

  subscribe(username,password,prenom,nom,adresse,telephone
  ,email,typeuser,photo,description){
    const User = new HttpParams()
    .set('name', username).set('password', password)
    .set('prenom', prenom).set('nom', nom)
    .set('adresse', adresse).set('telephone', telephone)
    .set('email', email).set('TypeUser', typeuser)
    .set('photo', photo).set('description', description)
    .set('admin', "0").set('confirme', "0")
    .set('dateinscription', formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    return this.http.post(`${config.apiUrl}/api/register`,User.toString(),config.headerObject); 
  }
}
