import { Component, Input } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animation';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,
  ]
})
export class PopUpComponent {
  @Input() isOpen = false;
}
