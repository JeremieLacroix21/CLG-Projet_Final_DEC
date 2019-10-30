import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services';

@Directive({
    selector: '[allowUserTypes]'
})
export class AppUserTypeDirective {
  constructor(private auth: AuthService, private renderer: Renderer2, private element: ElementRef) { }

  @Input('allowUserTypes') set allowed(types: string[]) {
    console.log(this.element.nativeElement);
    console.log(types.find(t => t === this.auth.currUser.TypeUser));
    if (types.findIndex(t => t === this.auth.currUser.TypeUser) == -1) {
      let parentNode = this.renderer.parentNode(this.element.nativeElement);
      this.renderer.removeChild(parentNode, this.element.nativeElement);
    }
  }
}
