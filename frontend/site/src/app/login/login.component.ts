import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthenticationService } from '../services/authentification.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  invalidLogin: boolean;

  constructor(
    private router: Router, 
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  get username()
  {
    return this.form.get('username');
  }

  get password()
  {
    return this.form.get('password');
  }

 onSubmit(){
   console.log(this.form.value);
 }

}

