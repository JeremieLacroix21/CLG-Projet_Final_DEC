import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import { config } from '../../config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
      const body = new HttpParams()
        .set('name', username)
        .set('password', password);
    
      return this.http.post(`${config.apiUrl}/api/login`,
        body.toString(),
        config.headerObject
      ); 
    }

  SendUsername(email){
    const sendemail = new HttpParams().set('email', email);
   return this.http.post(`${config.apiUrl}/api/RecoverUsername`,sendemail.toString(),config.headerObject); 
  }
  SendPassword(username){
    const sendemail = new HttpParams().set('nomutilisateur', username);
    return this.http.post(`${config.apiUrl}/api/RecoverPassword`,sendemail.toString(),config.headerObject); 
  }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
