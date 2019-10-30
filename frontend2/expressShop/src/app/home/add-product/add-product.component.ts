import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { v4 as uuid } from 'uuid';
import { ProductService } from '../../services/product.service';
import { AuthService } from 'src/app/services';
import { LoaderService } from 'src/app/services/loader.service';

export interface tag {
  name: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    prix: new FormControl('', Validators.required),
    quantite: new FormControl('', Validators.required),
    tags: new FormControl('', Validators.required)
  })

  get nom() { return this.productForm.get('nom'); }
  get description() { return this.productForm.get('description'); }
  get prix() { return this.productForm.get('prix'); }
  get quantite() { return this.productForm.get('quantite'); }


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: tag[] = [];
  tagarray: string[];
  TagChaine: string;

  constructor(private productService: ProductService, private auth: AuthService, private loader: LoaderService) { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }
    if (input) {
      input.value = '';
    }
  }

  remove(Tag: tag): void {
    const index = this.tags.indexOf(Tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  onSubmit() {

    if (this.productForm.invalid) {
      return;
    }
    else {
      this.TagChaine = "";
      this.tags.forEach(element => {
        this.TagChaine += element.name + ";";
      });

      this.productService.AddProduct(this.productForm.controls.nom.value,
        this.productForm.controls.prix.value,
        this.auth.currUser.iduser,
        this.productForm.controls.quantite.value,
        uuid(),
        this.productForm.controls.description.value,
        this.TagChaine
      ).subscribe(
        (res) => {
          this.productForm.reset()
          this.tags = new Array();
        },
        (err) => {

        }
      );
    }
  }
}