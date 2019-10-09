import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../services';
import { first } from 'rxjs/operators';
import { DEBUGGING } from '../models/DEBUG-LOGIN';
import { errormessage } from '../models/error';

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

  loading = false;
  submitted = false;
  returnUrl: string
  invalidLogin: boolean;
  errormessages: errormessage[]

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ){ }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  GoToSubscribe(){
    this.router.navigate(["/subscribe"]);
  }
  
  onSubmit() {
    //console.log(this.form.controls.username.value);
    this.submitted = true;
    console.log("submit");
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.form.controls.username.value, this.form.controls.password.value)
      .pipe(first())
      .subscribe(
          data => {
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.router.navigate([this.returnUrl]);
          },
          err => {
            if (!DEBUGGING) {
              this.invalidLogin = true;
              this.errormessages = err.error;
              this.loading = false; 
            }
            if (DEBUGGING) {
              localStorage.setItem('currentUser', '0'/*JSON.stringify("visitor")*/);
              this.router.navigate([this.returnUrl]);
            }
          }
      );
  }

}
