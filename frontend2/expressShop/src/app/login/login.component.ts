import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../services';
import { first } from 'rxjs/operators';
import { DEBUGGING } from '../models/DEBUG-LOGIN';
import { errormessage } from '../models/error';
import { config } from 'src/config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private errorMessageSub: Subscription;
  private currUserSub: Subscription;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    })
  formUsername = new FormGroup({
    email : new FormControl('', [Validators.required,Validators.email])
    })
  formPassword = new FormGroup({
    username2 : new FormControl('', Validators.required)
    })
    
  InValideUsername= false;
  InValidePassword = false;
  ValidePassword = false;
  ValideUsername = false;
  popUpOpenPassword = false;
  popUpOpen = false;
  loading = false;
  submitted = false;
  returnUrl: string
  invalidLogin: boolean;
  errormessages: errormessage[]

  get username()  { return this.form.get('username');}
  get password()  { return this.form.get('password');}
  get email()     { return this.formUsername.get('email');}
  get username2() { return this.formPassword.get('username2');}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ){ }

  ngOnInit() {
    console.log("login page init");
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (DEBUGGING) {
      localStorage.setItem(config.storedUser, JSON.stringify({nomutilisateur:"test", pwd:"Qwerty123!"}));
      this.router.navigate([this.returnUrl]);
    } else {
      this.errorMessageSub = this.authenticationService.errorMessage.subscribe(err => {
        console.log(err);
        this.invalidLogin = true;
        this.errormessages = err;
        this.loading = false;
      });
  
      this.currUserSub = this.authenticationService.currentUser.subscribe(u => {
        if (u) {
          this.router.navigate([this.returnUrl]);
        }
      });
    }
  }

  ngOnDestroy() {
    this.errorMessageSub.unsubscribe();
    this.currUserSub.unsubscribe();
  }

  GoToSubscribe(){
    this.router.navigate(["/subscribe"]);
  }

  DemandeUsername(){
    this.popUpOpen = true;
  }
  DemandeMotdepasse(){
    this.popUpOpenPassword = true
  }
  cancelOption(){
    this.popUpOpen = false;
    this.popUpOpenPassword = false;
  }
  SendEmailUser(){
    this.authenticationService.SendUsername(this.formUsername.controls.email.value).subscribe(
      data => {
        this.ValideUsername = true;
      },
      err => {
        this.InValideUsername = true;
        }
    );
  }
  SendEmailPass(){
    this.authenticationService.SendPassword(this.formPassword.controls.username2.value).subscribe(
      data => {
        this.ValidePassword = true;
      },
      err => {
        this.InValidePassword = true;
        }
    );
  }
  
  onSubmit() {
    console.log("login page submit");
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    
    this.loading = true;
    this.authenticationService.login(this.form.controls.username.value, this.form.controls.password.value);
  }

}
