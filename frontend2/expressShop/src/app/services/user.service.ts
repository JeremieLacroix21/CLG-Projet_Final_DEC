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
      { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') }
    );
  }
}
