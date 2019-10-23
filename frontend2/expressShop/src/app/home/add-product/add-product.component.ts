import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

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
  })

  constructor() { }

  ngOnInit() {
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: tag[] = [
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
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
}