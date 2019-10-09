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
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    TypeUser: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    Telephone: new FormControl('', Validators.required),
    Image: new FormControl('', Validators.required),
    Description: new FormControl ('', Validators.required)
  })

  loading = false;
  submitted = false;
  returnUrl: string
  invalidsubscribe: boolean;
  selectedfile : File;
  PhotoProfil : string;
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

  popUpOpen = false;

  cancelOption() {
    this.popUpOpen = false;
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.imageSrc = "campagne.jpg";
  }

  onFileChanged(event) {
    this.selectedfile = event.target.files[0]
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(this.selectedfile);
  }
  
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.popUpOpen = true;
      this.invalidsubscribe = true;
      return;
    }
    else{
      this.onUpload();
    }
    this.loading = true;
  }

  onUpload() {
    this.subscribeservice.uploadImage(this.selectedfile).subscribe(
      (res) => {
        this.PhotoProfil = res.toString();
      },
      (err) => {
        console.log(err);
      })
  }

}
