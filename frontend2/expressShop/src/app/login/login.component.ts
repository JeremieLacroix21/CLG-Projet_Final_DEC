import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../services';
import { first } from 'rxjs/operators';

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

  constructor(
    private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService
  ) { }

  ngOnInit() {
        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
   console.log(this.form.controls.username.value);
   this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.form.controls.username.value, this.form.controls.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    localStorage.setItem('currentUser', JSON.stringify(this.form.controls.username.value));
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    // COMMENT FOR DEBUG
                    this.invalidLogin = true;
                    this.loading = false; 

                    //DEBUG UNCOMMENT TO GAIN ACCESS LOGIN --> HOME
                    /* localStorage.setItem('currentUser', JSON.stringify(this.form.controls.username.value));
                    this.router.navigate([this.returnUrl]); */
                });
 }

}

