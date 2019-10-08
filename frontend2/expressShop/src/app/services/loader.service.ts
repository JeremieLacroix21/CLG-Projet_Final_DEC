import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private textSource = new Subject<string>();

  text = this.textSource.asObservable();

  show(text: string) {
    this.textSource.next(text);
  }

  hide() {
    this.textSource.next("");
  }
}
