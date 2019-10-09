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
  max=0;
  min=0;
  subscription: Subscription;
  products: Product[];
  Tproducts: Product[];
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

  private AddProductToCart (iduser:number,idproduct:number) {
    this.productService.AddProductToCart(iduser,idproduct,1);
  }

  private Filter(chaine:string, idf:string, pmin:number, pmax:number){
    this.filteredProducts = this.products;
    this.Tproducts = null;
    var newArray = new Array();
    console.log(chaine);
    console.log(pmin);
    console.log(pmax);

    this.filteredProducts = (chaine) ?
      this.filteredProducts.filter(p => p.nom.toLowerCase().includes(chaine.toLowerCase())):
          this.filteredProducts;

    this.filteredProducts = (idf) ?
      this.filteredProducts.filter(p => p.nomFournisseur.toLowerCase().includes(idf.toLowerCase())):
        this.filteredProducts;

    if(pmax){
      var j= 0
      for (var i = 0; i < this.filteredProducts.length; i++) {
        if (this.filteredProducts[i].prix <= pmax) {
          newArray[j] = this.filteredProducts[i];
          j++;
        }
      }
      this.filteredProducts = newArray;
    } 
    newArray = new Array();
    if(pmin){
      var j= 0
      for (var i = 0; i < this.filteredProducts.length; i++) {
        if (this.filteredProducts[i].prix >= pmin) {
          newArray[j] = this.filteredProducts[i];
          j++;
        }
      }
      this.filteredProducts = newArray;
    }
  }


}
