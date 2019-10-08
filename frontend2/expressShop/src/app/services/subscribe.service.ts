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

  uploadImage(Image: File) {
    const formData = new FormData();
    formData.append('image', Image, Image.name);
    return this.http.post(`${config.apiUrl}/api/AddImage`, formData);
  }
}
