import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from '../../config';

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
}
