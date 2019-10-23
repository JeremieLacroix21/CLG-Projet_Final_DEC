import { Component, OnInit } from '@angular/core';
import { Commandes } from '../../models/commandes';
import { AuthService } from 'src/app/services';
import { Subscription } from 'rxjs';
import { CommandeService } from '../../services/commande.service';
import { LoaderService } from 'src/app/services/loader.service';
import { MatTableDataSource } from '@angular/material';
import { Fournisseur } from 'src/app/models/Fournisseur';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  CommandesEnCour: Commandes[];
  CommandesTerminé: Commandes[];
  Fournisseur : Fournisseur[];
  WaitingTime : number;
  EstOuvert = 0;

  subscription: Subscription;
  public dataSource = new MatTableDataSource<Commandes>();
  public displayedColumns = ['Id', 'date', 'NomFournisseur', 'Détails'];

  constructor(private auth: AuthService, private commandeService: CommandeService, private loader: LoaderService) {
    let i = 0;
    let j = 0;
    this.commandeService.GetCommande(33/*this.auth.currUser*/,'0').subscribe(commandes => {
     this.WaitingTime = commandes.length * 500;
      commandes.forEach(Nom => {
        this.CommandesEnCour = commandes
        this.CommandesEnCour[j].DateCreation = Nom['dateCreation']
        this.commandeService.GetFournisseur(Nom['idFournisseur']).subscribe(fournisseur =>{
          this.CommandesEnCour[i].nomFournisseur = fournisseur[0]['nomutilisateur'];
          i++;
        });
      j++;
      });
      setTimeout(() => {
        this.loader.hide()
        this.dataSource.data =  this.CommandesEnCour;
      },this.WaitingTime);
    });
  }

  ngOnInit() {
    //loader les commandes
    this.loader.show("Chargement des commandes...");
    this.EstOuvert =0;
  }

  OpenDropDown(idcommande){
    let currcommande = this.dataSource.filteredData.find(commande => commande.idCommande === idcommande);
    if(currcommande.EstOuvert)
    {
      currcommande.EstOuvert = false;
    }
    else{
      currcommande.EstOuvert = true;
    }
    
  }
 
}
