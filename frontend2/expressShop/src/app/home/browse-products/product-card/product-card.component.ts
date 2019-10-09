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

<<<<<<< HEAD

  AddProductToCart(idproduct:number) {
    console.log(idproduct)
    this.productService.AddProductToCart(JSON.parse(localStorage.getItem('currentUser')) ,idproduct,1).subscribe(
=======
  AddProductToCart(idproduct:number) {
    let iduser =  +localStorage.getItem('currentuser');
    this.productService.AddProductToCart(iduser,idproduct,1).subscribe(
>>>>>>> 2a647f9af35bcef0ef77083923e05aff4c5e4838
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
<<<<<<< HEAD
      });
=======
      }); 
>>>>>>> 2a647f9af35bcef0ef77083923e05aff4c5e4838
  }

  ngOnInit() {
  }
}
