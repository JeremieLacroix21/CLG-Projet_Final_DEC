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


  AddProductToCart(iduser:number,idproduct:number) {
    this.productService.AddProductToCart(iduser,idproduct,1).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }
  ngOnInit() {
  }

  
  
  
}
