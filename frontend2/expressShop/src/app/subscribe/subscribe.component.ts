import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { subscribeservice } from '../services/subscribe.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  
  form = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(5)]),
    password: new FormControl('', [Validators.required,Validators.minLength(5)]),
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    TypeUser: new FormControl(''),
    adresse: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    Telephone: new FormControl('', [Validators.required,Validators.pattern('[0-9]+'),Validators.maxLength(10)]),
    Image: new FormControl(''),
    Description: new FormControl ('', Validators.required)
  })

  popUpOpen = false;
  loading = false;
  submitted = false;
  returnUrl: string;
  invalidsubscribe: boolean;
  selectedfile : File;
  imageSrc: string;

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get nom() { return this.form.get('nom'); }
  get prenom() { return this.form.get('prenom'); }
  get TypeUser() { return this.form.get('TypeUser'); }
  get adresse() { return this.form.get('adresse'); }
  get email() { return this.form.get('email'); }
  get Telephone() { return this.form.get('Telephone'); }
  get Image() { return this.form.get('Image'); }
  get Description() { return this.form.get('Description');}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subscribeservice: subscribeservice
  ){ }

  cancelOption() {
    this.popUpOpen = false;
    this.router.navigate(["/home/browseProduct"]);
  }
  AnnunlerOption() {
    this.router.navigate([this.returnUrl]);
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.imageSrc = "campagne.jpg";
    this.form.controls.Image.setValue(this.imageSrc);
    this.form.controls.TypeUser.setValue("Fournisseur");
  }
  selectChangeHandler (event: any) {
    this.form.controls.TypeUser.setValue(event.target.value);
  }

  onFileChanged(event) {
    this.selectedfile = event.target.files[0]
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result.toString();
    reader.readAsDataURL(this.selectedfile);
  }
  
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.invalidsubscribe = true;
      console.log(this.form.controls.Image.value);
      return;
    }
    else{
      this.onUpload();
      this.subscribeservice.subscribe(this.form.controls.username.value, this.form.controls.password.value,
        this.form.controls.prenom.value,this.form.controls.nom.value,this.form.controls.adresse.value,
        this.form.controls.Telephone.value,this.form.controls.email.value,this.form.controls.TypeUser.value,
        this.form.controls.Image.value,this.form.controls.Description.value).subscribe(
       (res) => {
        console.log(res);
        this.popUpOpen = true;
      },
      (err) => {
        console.log(err);
      }
  );
    }
  }

  onUpload() {
    this.subscribeservice.uploadImage(this.selectedfile).subscribe(
      (res) => {
        this.form.controls.Image.setValue(res.toString());
      },
      (err) => {
        console.log(err);
      })
  }
}
