import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class Aboutcomponent implements OnInit {

  form = new FormGroup({
    Nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    message: new FormControl ('', Validators.required),
    })

    get Nom() { return this.form.get('Nom'); }
    get email() { return this.form.get('email'); }
    get message() { return this.form.get('message'); }

  constructor() { }

  ngOnInit() {
  }
}