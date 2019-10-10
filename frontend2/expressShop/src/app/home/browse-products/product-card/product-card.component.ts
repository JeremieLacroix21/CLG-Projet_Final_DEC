import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { config } from 'src/config';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) { }

  AddProductToCart(idproduct:number) {
    let iduser = +localStorage.getItem(config.storedUser);
    
    this.productService.AddProductToCart(iduser,idproduct,1).subscribe(
      (res) => {
        this.productService.RefreshCartItemCount(iduser);
        console.log(res);
      },
      (err) => {
        console.log(err);
    });
  }

  ngOnInit() {
    
  }
}
