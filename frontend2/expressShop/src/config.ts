import { HttpHeaders } from '@angular/common/http';
import { USE_LOCAL } from './app/models/API-CONFIG';
import { BD_User } from './app/models/user';

export const config = {
    apiUrl: USE_LOCAL ? 'http://127.0.0.1:8000' : 'http://3.15.151.13/Laravel',
    headerObject: { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') },
    storedUser: 'currentUser'
};