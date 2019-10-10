import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import { config } from '../../config';
import { BD_User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<BD_User>;
  private errorMessageSource = new Subject<any[]>();

  public currentUser: Observable<BD_User>;
  public errorMessage = this.errorMessageSource.asObservable();

  constructor(private http: HttpClient) {
    // TODO : Figure out tokens
    let loggedUserJSON = localStorage.getItem(config.storedUser);
    let loggedUserNameAndPwd = JSON.parse(loggedUserJSON);

    if (loggedUserNameAndPwd) {
      this.login(loggedUserNameAndPwd.nomutilisateur, loggedUserNameAndPwd.pwd);
    }
    
    this.currentUserSubject = new BehaviorSubject<BD_User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): BD_User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const body = new HttpParams()
      .set('name', username)
      .set('password', password);
  
    let request = this.http.post<BD_User>(
      `${config.apiUrl}/api/login`,
      body.toString(),
      config.headerObject
    );

    request.subscribe(
      user => {
        localStorage.setItem(config.storedUser, JSON.stringify({"nomutilisateur":username, "pwd":password}));
        this.currentUserSubject.next(user);
      },
      err => {
        this.errorMessageSource.next(err.error);
      }
    );
  }

  SendUsername(email){
    const sendemail = new HttpParams().set('email', email);
    return this.http.post(
      `${config.apiUrl}/api/RecoverUsername`,
      sendemail.toString(),
      config.headerObject
    ); 
  }

  SendPassword(username){
    const sendemail = new HttpParams().set('nomutilisateur', username);
    return this.http.post(
      `${config.apiUrl}/api/RecoverPassword`,
      sendemail.toString(),
      config.headerObject
    ); 
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(config.storedUser);
    this.currentUserSubject.next(null);
  }
}
