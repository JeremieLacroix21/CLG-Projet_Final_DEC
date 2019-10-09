import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) { }

  AddProductToCart(idproduct:number) {
    
    let iduser =  +localStorage.getItem('currentuser');

<<<<<<< HEAD
  AddProductToCart(idproduct:number) {
    console.log(JSON.parse(localStorage.getItem('currentUser')))
    /* this.productService.AddProductToCart( ,idproduct,1).subscribe(
=======
    this.productService.AddProductToCart(iduser,idproduct,1).subscribe(
>>>>>>> 5c3d754d0e972ba1b145a933616b33de71b7a315
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }); */
  }
  ngOnInit() {
  }

  
  
  
}
