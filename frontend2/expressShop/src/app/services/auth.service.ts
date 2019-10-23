import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import { config } from '../../config';
import { BD_User } from '../models/user';
import { Supplier } from '../models/supplier';
import { Distributor } from '../models/distributor';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  private errorMessageSource = new Subject<any[]>();

  public currentUser: Observable<any>;
  public errorMessage = this.errorMessageSource.asObservable();

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
    console.log("auth service constructor called");

    // TODO : Figure out tokens
    let storedUser = JSON.parse(sessionStorage.getItem(config.storedUser));
    if (!storedUser) {
      let loggedUserJSON = localStorage.getItem(config.storedUser);
      let loggedUserNameAndPwd = JSON.parse(loggedUserJSON);
  
      if (loggedUserNameAndPwd) {
        this.login(loggedUserNameAndPwd.nomutilisateur, loggedUserNameAndPwd.pwd);
      }
    }

    this.currentUserSubject = new BehaviorSubject<any>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currUser(): BD_User {
    return this.currentUserSubject.value as BD_User;
  }

  public get currSupplier(): Supplier {
    return this.currentUserSubject.value as Supplier;
  }

  public get currDistributor(): Distributor {
    return this.currentUserSubject.value as Distributor;
  }

  login(username: string, password: string) {
    console.log("login called");

    const body = new HttpParams()
      .set('name', username)
      .set('password', password);
  
    let request = this.http.post<BD_User|Supplier|Distributor>(
      `${config.apiUrl}/api/login`,
      body.toString(),
      config.headerObject
    );

    this.spinner.show();
    request.subscribe(
      user => {
        this.spinner.hide();

        this.currentUserSubject.next(user);

        localStorage.setItem(config.storedUser, JSON.stringify({"nomutilisateur":username, "pwd":password}));
        sessionStorage.setItem(config.storedUser, JSON.stringify(this.currentUserSubject.value));
      },
      err => {
        this.spinner.hide();
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
    console.log("logout called");

    localStorage.removeItem(config.storedUser);
    sessionStorage.removeItem(config.storedUser);
    this.currentUserSubject.next(null);
  }
}
