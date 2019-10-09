import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.css']
})
export class BrowseProductsComponent implements OnInit, OnDestroy
{
  subscription: Subscription;
  products: Product[];
  filteredProducts: Product[];

  constructor(private productService: ProductService, private loader: LoaderService) {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products
      setTimeout(() => {
        this.loader.hide();
      });
    });
  }

  ngOnInit() {
    this.loader.show("Chargement des produits...");
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private AddProductToCart (idproduct:number,iduser:number) {
    /*TODO */
  }

  private FilterNom(chaine:string) {
    console.log(this.filteredProducts)

    if (chaine) {
      this.filteredProducts = this.products.filter(p => p.nom.toLowerCase().includes(chaine.toLowerCase()));
    } else {
      this.filteredProducts = this.products;
    }

    if (idf) {
      this.filteredProducts = this.filteredProducts.filter(p => p.nomFournisseur.toLowerCase().includes(idf.toLowerCase()));
    } else {
      this.filteredProducts = this.filteredProducts;
    }

    console.log(this.filteredProducts);
  }


}
