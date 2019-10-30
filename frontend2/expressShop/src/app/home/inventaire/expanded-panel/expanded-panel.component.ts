import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services';
import { LoaderService } from 'src/app/services/loader.service';
import { v4 as uuid } from 'uuid';

export interface tag {
  name: string;
}

@Component({
  selector: 'app-expanded-panel',
  templateUrl: './expanded-panel.component.html',
  styleUrls: ['./expanded-panel.component.css']
})
export class ExpandedPanelComponent implements OnInit {

  @Input()
  item: Product;

  productForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    prix: new FormControl('', Validators.required),
    enStock: new FormControl('', Validators.required),
    tags: new FormControl('')
  })

  get nom() { return this.productForm.get('nom'); }
  get description() { return this.productForm.get('description'); }
  get prix() { return this.productForm.get('prix'); }
  get enStock() { return this.productForm.get('enStock'); }

  TagChaine: string;
  tags: tag[] = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private productService: ProductService, private auth: AuthService, private loader: LoaderService) {
  }

  ngOnInit() {
    this.productForm.controls['nom'].setValue(this.item.nom);
    this.productForm.controls['enStock'].setValue(this.item.enStock);
    this.productForm.controls['prix'].setValue(this.item.prix);
    this.productForm.controls['description'].setValue(this.item.description);
    this.addArraytoChips(this.item.tags);
  }

  addArraytoChips(str_array: String[]) {
    str_array.forEach(element => {
      this.tags.push({ name: element['tag'].trim()});
    });
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
    /* if (this.productForm.invalid) {
      return;
    }
    else {
      this.TagChaine = "";
      this.tags.forEach(element => {
        this.TagChaine += element.name + ";";
      });

      this.productService.UpdateProduct().subscribe(
        (res) => {
        },
        (err) => {

        }
      );
    } */
  }
}
