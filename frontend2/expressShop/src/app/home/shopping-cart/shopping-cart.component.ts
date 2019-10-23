import { Component, OnInit, ViewChild } from '@angular/core';
import { productPanier } from 'src/app/models/productPanier.entity';
import { Router, ActivatedRoute } from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthService } from 'src/app/services';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) 
  paginator: MatPaginator;

  displayedColumns: string[] = ['image', 'nom', 'prix', 'quantité', 'sous-total'];

  dataSource : MatTableDataSource<productPanier>;
  total : number;
  Fournini :String;
  filter = 'blur(2px)'; 
  localres = "";
  isBlur = false;
  popUpOpen = false;
  popUpEmail = false;
  

  constructor(private auth: AuthService, private productService: ProductService, private loader: LoaderService, private spinner: NgxSpinnerService, private route: ActivatedRoute,
    private router: Router,) {
    this.dataSource = new MatTableDataSource<productPanier>(this.auth.currDistributor.cart);
    this.dataSource.paginator = this.paginator;
    
    this.Total();
  }

  ngOnInit() {
    //this.loader.show("Chargement des produits...");
    //console.log(this.auth.currDistributor.cart)
    console.log(this.popUpOpen.toString());
    this.popUpOpen = false;
  }
  
  increment(idProduit: number) {
    let currQtt = this.dataSource.filteredData.find(item => item.idproduits === idProduit).quantity += 1;
    this.productService.UpdateQuantityPanier(this.auth.currUser.iduser, idProduit, currQtt);

    this.Total();
  }
  
  decrement(idProduit: number) {
    let currQtt = this.dataSource.filteredData.find((item => item.idproduits === idProduit)).quantity -= 1;
    if (currQtt == 0) {
      this.delete(idProduit);
    } else {
      this.productService.UpdateQuantityPanier(this.auth.currUser.iduser, idProduit, currQtt).subscribe();
    }

    this.Total();
  }

  delete(idProduit: number) {
    this.productService.DeleteProductFromCart(this.auth.currUser.iduser, idProduit).subscribe();
    // Delete the user locally
    this.dataSource.data = this.dataSource.data.filter(u => u.idproduits != idProduit);
  }

  Total() {
    this.total = 0;
    for(let i = 0; i < this.dataSource.filteredData.length; ++i) {
      this.total += (this.dataSource.filteredData[i].prix * this.dataSource.filteredData[i].quantity);
    }
  }

  ValidateCommande() {
    this.BlurBackground();
    this.popUpOpen = true;
  }
  ClosePopUp() {
    this.isBlur = false;
    this.popUpOpen = false;
  }
  ReturnMenu(){
    this.isBlur = false;
    this.popUpEmail = false;
    this.router.navigate(["/home/browseProduct"]);
  }
  SendCommande() {
    this.isBlur = false;
    this.popUpOpen = false;
    var ProduitArray = new Array();
    var quantiteArray = new Array();
    this.Fournini = "";
    for(let i = 0; i < this.dataSource.filteredData.length; ++i) {
      quantiteArray[i] = this.dataSource.filteredData[i].quantity.toString();
      ProduitArray[i] = this.dataSource.filteredData[i].idproduits.toString();
      this.Fournini += this.dataSource.filteredData[i].idproduits.toString() + ";";
    }
    this.productService.GetFournisseurPanier(this.Fournini).subscribe(
      (idFournisseur : String[]) => {
            idFournisseur.forEach(iduser => {
              this.spinner.show();
            //Crée une commande par fournisseur
             this.productService.CreationCommmande(iduser[0]['idFournisseur'], 33/*this.auth.currUser.iduser*/).subscribe(
              (idCommande : String[])  => {
                 ProduitArray.forEach(idproduit => {
                     //Crée les items commandes
                     this.productService.CreationCommandeItems(idCommande[0]['MAX(idCommande)'],idproduit,quantiteArray[0]).subscribe();
            })
            //Envoyer les commandes
            this.productService.EnvoieCommande(iduser[0]['idFournisseur'],33/*this.auth.currUser.iduser*/,).subscribe(
              (res) =>{
                this.localres = res + this.localres;
                console.log(this.localres.length);
                if(this.localres.length > iduser.length * 15)
                {
                  this.spinner.hide();
                  this.popUpEmail = true;
                  this.BlurBackground();
                }
              }
            );
            });
          }
    );
  });
}

  BlurBackground(){
     this.isBlur = true;
  }
}
