import { HttpHeaders } from '@angular/common/http';

export const config = {
    apiUrl: 'http://3.15.151.13/Laravel',
    headerObject: { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') }
};