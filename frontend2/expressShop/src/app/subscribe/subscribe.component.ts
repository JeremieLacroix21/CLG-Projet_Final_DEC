import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { subscribeservice } from '../services/subscribe.service';
import { errormessage } from '../models/error';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Tags } from '../models/tags';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';

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
    Description: new FormControl ('', Validators.required),
    tags: new FormControl('')
  })

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get nom() { return this.form.get('nom'); }
  get prenom() { return this.form.get('prenom'); }
  get TypeUser() { return this.form.get('TypeUser'); }
  get adresse() { return this.form.get('adresse'); }
  get email() { return this.form.get('email'); }
  get Telephone() { return this.form.get('Telephone'); }
  get Image() { return this.form.get('Image'); }
  get Description() { return this.form.get('Description'); }
  get tags() { return this.form.get('tags'); }


  popUpOpen = false;
  loading = false;
  isBlur = false;
  submitted = false;
  EstFournisseur : boolean;
  returnUrl: string;
  TagChaine : string;
  invalidsubscribe: boolean;
  selectedfile : File;
  imageSrc: string;
  error : string;
  errormessages: errormessage[]
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tag: Tags[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private subscribeservice: subscribeservice
  ){ }

  cancelOption() {
    this.popUpOpen = false;
    this.isBlur =false;
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
    this.EstFournisseur = true;
  }
  selectChangeHandler (event: any) {
    if(event.target.value == "Fournisseur")
    {
      this.EstFournisseur = true;
    }
    else{
      this.EstFournisseur = false;
    }
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
      return;
    }
    else{
      this.spinner.show();
      this.onUpload();
      this.subscribeservice.subscribe(this.form.controls.username.value, this.form.controls.password.value,
        this.form.controls.prenom.value,this.form.controls.nom.value,this.form.controls.adresse.value,
        this.form.controls.Telephone.value,this.form.controls.email.value,this.form.controls.TypeUser.value,
        this.form.controls.Image.value,this.form.controls.Description.value).subscribe(
       (res) => {
         if(this.form.controls.TypeUser.value == "Fournisseur")
         {
            this.AjoutTags(this.tag);
         }
        this.invalidsubscribe = false;
        this.spinner.hide();
        this.isBlur =true;
        this.popUpOpen = true;
      },
      (err) => {
        this.spinner.hide();
        this.invalidsubscribe = true;
        this.errormessages = err.error;
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

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our tag
    if ((value || '').trim()) {
      this.tag.push({name: value.trim()});
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(tag: Tags): void {
    const index = this.tag.indexOf(tag);

    if (index >= 0) {
      this.tag.splice(index, 1);
    }
  }

  AjoutTags(tag){
    this.TagChaine = "";
   tag.forEach(element =>{
    this.TagChaine += element.name + ";";
   });
   this.subscribeservice.AddTag(this.TagChaine).subscribe(
    (res) => {
      this.form.controls.tags.setValue(res.toString());
    },
    (err) => {
      console.log(err);
    })
  }
}


