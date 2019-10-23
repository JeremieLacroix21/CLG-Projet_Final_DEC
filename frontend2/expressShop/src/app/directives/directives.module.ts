import { NgModule } from '@angular/core';
import { AppUserTypeDirective } from './app-user-type.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule ],
    declarations: [AppUserTypeDirective],
    exports: [AppUserTypeDirective, CommonModule]
})

export class DirectivesModule { }