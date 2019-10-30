import { Component, OnInit, ViewChild } from '@angular/core';
import { productPanier } from 'src/app/models/productPanier.entity';
import { Router, ActivatedRoute } from "@angular/router";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthService } from 'src/app/services';
import { Distributor } from 'src/app/models/distributor';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;
  displayedColumns: string[] = ['image', 'nom', 'prix', 'quantité', 'sous-total'];
  dataSource: MatTableDataSource<productPanier>;

  total: number;
  Fournini: String;
  filter = 'blur(2px)'; 
  localres = "";
  isBlur = false;
  popUpOpen = false;
  popUpEmail = false;
  EstVide = false;
  
  constructor (
    private auth: AuthService,
    private productService: ProductService,
    private loader: LoaderService,
    private router: Router,
    private currentdistributor: Distributor 
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<productPanier>(this.auth.currDistributor.cart);
    this.dataSource.paginator = this.paginator;
    this.Total();
    this.EstVide = (this.dataSource.filteredData.length == 0);
  }
  
  increment(idProduit: number) {
    let currQtt = this.dataSource.filteredData.find(item => item.idproduits === idProduit).quantity += 1;
    this.productService.UpdateQuantityPanier(this.auth.currUser.iduser, idProduit, currQtt);
    this.Total();
  }
  
  decrement(idProduit: number) {
    let currQtt = this.dataSource.filteredData.find(item => item.idproduits === idProduit).quantity -= 1;
    if (currQtt == 0) {
      this.delete(idProduit);
    } else {
      this.productService.UpdateQuantityPanier(this.auth.currUser.iduser, idProduit, currQtt).subscribe();
    }
    this.Total();
  }

  delete(IdProduit: number) {
    this.productService.DeleteProductFromCart(this.auth.currUser.iduser, IdProduit).subscribe();
    // Delete the user locally
    this.dataSource.data = this.dataSource.data.filter(u => u.idproduits != IdProduit);

    this.currentdistributor = this.auth.currDistributor;

    const index = this.currentdistributor.cart.findIndex(item => item.idproduits === IdProduit);
if (index > -1) {
  this.currentdistributor.cart.splice(index, 1);
}
    
    this.auth.updateCurrUser(this.currentdistributor);
    if (this.auth.currUser.TypeUser === this.auth.D) {
      this.productService.RefreshCartItemCount(this.auth.currDistributor.cart.length);
    }
  }

  Total() {
    this.total = 0;
    for (let i = 0; i < this.dataSource.filteredData.length; ++i) {
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

  ReturnMenu() {
    this.isBlur = false;
    this.popUpEmail = false;
    this.router.navigate(["/home/browseProduct"]);
  }

  BlurBackground() {
    this.isBlur = true;
  }

  SendCommande() {
    if (this.EstVide) {
      return;
    }
    
    this.loader.show("Envoi de votre commande...");
    this.isBlur = false;
    this.popUpOpen = false;
    this.Fournini = "";

    let ProduitArray = new Array();
    let quantiteArray = new Array();
    
    for (let i = 0; i < this.dataSource.filteredData.length; ++i) {
      quantiteArray[i] = this.dataSource.filteredData[i].quantity.toString();
      ProduitArray[i] = this.dataSource.filteredData[i].idproduits.toString();
      this.Fournini += this.dataSource.filteredData[i].idproduits.toString() + ";";
    }

    this.productService.GetFournisseurPanier(this.Fournini).subscribe((idFournisseur: String[]) => {
      for (let iduser of idFournisseur) {
        //Crée une commande par fournisseur
        this.createCommande(iduser[0]['idFournisseur'], ProduitArray, quantiteArray);
      }
    });
  }

  //Crée une commande par fournisseur
  createCommande(idFournisseur, ProduitArray, quantiteArray) {
    this.productService.CreationCommmande(idFournisseur, this.auth.currUser.iduser).subscribe((idCommande: String[]) => {
      for (let idproduit of ProduitArray) {
        //Crée les items commandes
        this.createCommandeItem(idCommande[0]['MAX(idCommande)'], idproduit, quantiteArray[0]);
      }

      //Envoyer les commandes
      this.productService.EnvoieCommande(idFournisseur, this.auth.currUser.iduser)
      .subscribe(res => {
        this.loader.hide();
        this.popUpEmail = true;
        this.BlurBackground();
      });
    });
  }

  //Crée les items commandes
  createCommandeItem(idCommande, idproduit, quantite) {
    this.productService.CreationCommandeItems(idCommande, idproduit, quantite).subscribe();
  }
}
