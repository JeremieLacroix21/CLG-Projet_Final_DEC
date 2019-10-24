import { Directive, Input, ElementRef } from '@angular/core';
import { AuthService } from '../services';

@Directive({
    selector: '[allowUserTypes]'
})
export class AppUserTypeDirective {
  constructor(private auth: AuthService, private element: ElementRef) { }

  @Input('allowUserTypes') set allowed(types: string[]) {
    if (types.findIndex(t => t === this.auth.currUser.TypeUser) == -1) {
      this.element.nativeElement.remove();
    }
  }
}
