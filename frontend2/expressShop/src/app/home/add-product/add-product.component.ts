import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    
  })

  constructor() { }

  ngOnInit() {
  }

}
