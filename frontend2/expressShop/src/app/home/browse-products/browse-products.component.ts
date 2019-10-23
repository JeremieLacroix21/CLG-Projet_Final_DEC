import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthService } from 'src/app/services';
import { SUPPLIER } from '../..//models/user';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.css']
})
export class BrowseProductsComponent implements OnInit, OnDestroy {
  max = 0;
  min = 0;
  subscription: Subscription;
  products: Product[];
  filteredProducts: Product[];
  ArrayTags: String[];



  constructor(private auth: AuthService, private productService: ProductService, private loader: LoaderService) {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products
      setTimeout(() => {
        this.loader.hide();
      });
    });
  }

  ngOnInit() {
    this.loader.show("Chargement des produits...");
    console.log(this.auth.currUser);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  AddProductToCart(idproduct: number) {
    this.productService.AddProductToCart(this.auth.currUser.iduser, idproduct, 1);
  }


  private Filter(chaine: string, idf: string, pmin: number, pmax: number, tagS: string) {
    this.filteredProducts = this.products;
    var newArray = new Array();

    this.filteredProducts = (chaine) ?
      this.filteredProducts.filter(p => p.nom.toLowerCase().includes(chaine.toLowerCase())) :
      this.filteredProducts;

    this.filteredProducts = (idf) ?
      this.filteredProducts.filter(p => p.nomFournisseur.toLowerCase().includes(idf.toLowerCase())) :
      this.filteredProducts;

    if (pmax) {
      var j = 0
      for (var i = 0; i < this.filteredProducts.length; i++) {
        if (this.filteredProducts[i].prix <= pmax) {
          newArray[j] = this.filteredProducts[i];
          j++;
        }
      }
      this.filteredProducts = newArray;
    }
    newArray = new Array();
    if (pmin) {
      var j = 0
      for (var i = 0; i < this.filteredProducts.length; i++) {
        if (this.filteredProducts[i].prix >= pmin) {
          newArray[j] = this.filteredProducts[i];
          j++;
        }
      }
      this.filteredProducts = newArray;
    }

    newArray = new Array();
    if (tagS) {
      var j = 0
      for (var i = 0; i < this.filteredProducts.length; i++) {
        let x = false;
        this.ArrayTags = this.filteredProducts[i].tags.map(function (item) { return item['tag'] });
        this.ArrayTags.forEach(tag => {
          if (tag.toLowerCase().includes(tagS.toLowerCase())) {
            x = true;
          }
        });
        if (x) {
          newArray[j] = this.filteredProducts[i];
          j++;
        }
      }
      this.filteredProducts = newArray;
    }
  }
}