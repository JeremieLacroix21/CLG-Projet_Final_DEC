import { HttpHeaders } from '@angular/common/http';

export const config = {
    apiUrl: 'http://127.0.0.1:8000',
    headerObject: { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') }
};