import { Component, OnInit, ViewChild} from '@angular/core';
import { Commandes } from '../../models/commandes';
import { CommandesItems } from '../../models/commandesItems';
import { AuthService } from 'src/app/services';
import { Subscription } from 'rxjs';
import { CommandeService } from '../../services/commande.service';
import { LoaderService } from 'src/app/services/loader.service';
import { MatTableDataSource, getMatFormFieldMissingControlError } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { CommandesFournisseur } from 'src/app/models/commandesFournisseur';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CommandeComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  CommandesEnCour: Commandes[];
  CommandesFournisseur: CommandesFournisseur[];
  EstDistributeur =false;
  TermineSection =false;
  selectedrow : string;
  lastrow : number;
  date :Date;

  subscription: Subscription;
  public dataSource = new MatTableDataSource<Commandes>();
  public dataSourceFournisseur = new MatTableDataSource<CommandesFournisseur>();
  public displayedColumns = ['idCommande', 'dateCreation', 'nomFournisseur', 'EmailFournisseur','telephone'];
  public displayedColumns2 = ['idCommande', 'dateCreation', 'nomDistributeur', 'EmailDistributeur','telephone', 'Terminé la commande'];
  public itemsColumns = ['nom', 'prix', 'quantite','description'];

  constructor(private auth: AuthService, private commandeService: CommandeService, private loader: LoaderService) {
    if(this.auth.currUser.TypeUser == this.auth.D)
    {
      this.TermineSection = false;
      this.EstDistributeur = true;
      let i = 0;
      this.commandeService.GetCommande(this.auth.currUser.iduser).subscribe(commandes => {
        this.CommandesEnCour = commandes;
        commandes.forEach(Numcommande => {
          this.CommandesEnCour[i].telephone=  "+1 " + Numcommande.telephone;
          this.date = new Date(this.CommandesEnCour[i].dateCreation);
          this.CommandesEnCour[i].dateCreation= this.date.toDateString();
          i++;
        });
        this.dataSource.data =  this.CommandesEnCour;
        this.dataSource.data = this.dataSource.data.filter(u => u.complete == 0);
        this.loader.hide();
      });
    }
    else{
      let i = 0;
    this.commandeService.GetCommandeFournisseur(this.auth.currUser.iduser).subscribe(commandes => {
      this.CommandesFournisseur = commandes;
      commandes.forEach(Numcommande => {
        this.CommandesFournisseur[i].telephone=  "+1 " + Numcommande.telephone;
        this.date = new Date(this.CommandesFournisseur[i].dateCreation);
        this.CommandesFournisseur[i].dateCreation= this.date.toDateString();
        i++;
      });
      this.dataSourceFournisseur.data =  this.CommandesFournisseur;
      this.dataSourceFournisseur.data = this.dataSourceFournisseur.data.filter(u => u.complete == 0);
      this.loader.hide();
    });
    }
  }

  ngOnInit() {
    if(this.EstDistributeur)
    {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.selectedrow = "0";
    }
    else{
      this.dataSourceFournisseur.paginator = this.paginator;
      this.dataSourceFournisseur.sort = this.sort;
      this.selectedrow = "0";
    }
    this.lastrow = parseInt(this.selectedrow);
    this.loader.show("Chargement des commandes...");
  }

  applyFilter(filterValue: string) {
    if(this.EstDistributeur)
    {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    else{
      this.dataSourceFournisseur.filter = filterValue.trim().toLowerCase();
      if (this.dataSourceFournisseur.paginator) {
        this.dataSourceFournisseur.paginator.firstPage();
      }
    }
  }

  ChangeRow(){
    if(this.EstDistributeur)
    {
      if(this.lastrow != parseInt(this.selectedrow))
      {
        this.dataSource.data =this.CommandesEnCour;
        this.lastrow = parseInt(this.selectedrow);
        if(this.selectedrow == "0")
        {
          this.dataSource.data = this.dataSource.data.filter(u => u.complete == 0);
        }
        else{
          this.dataSource.data = this.dataSource.data.filter(u => u.complete == 1);
        }
      }
    }
    else{
      if(this.lastrow != parseInt(this.selectedrow))
      {
        this.dataSourceFournisseur.data =this.CommandesFournisseur;
        this.lastrow = parseInt(this.selectedrow);
        if(this.selectedrow == "0")
        {
          this.TermineSection = false;
          this.dataSourceFournisseur.data = this.dataSourceFournisseur.data.filter(u => u.complete == 0);
        }
        else{
          this.TermineSection = true;
          this.dataSourceFournisseur.data = this.dataSourceFournisseur.data.filter(u => u.complete == 1);
        }
      }
    }
  }
  CompleteCommande(idCommande){
    this.loader.show("Achèvement de votre commande...");
    this.commandeService.CompleteCommande(idCommande).subscribe( res=>
      {
        this.updatecommandelist();
        this.loader.hide();
        console.log(res);
      });
  }
  updatecommandelist(){
    let i = 0;
    this.commandeService.GetCommandeFournisseur(this.auth.currUser.iduser).subscribe(commandes => {
      this.CommandesFournisseur = commandes;
      commandes.forEach(Numcommande => {
        this.CommandesFournisseur[i].telephone=  "+1 " + Numcommande.telephone;
        this.date = new Date(this.CommandesFournisseur[i].dateCreation);
        this.CommandesFournisseur[i].dateCreation= this.date.toDateString();
        i++;
      });
      this.dataSourceFournisseur.data =  this.CommandesFournisseur;
      this.dataSourceFournisseur.data = this.dataSourceFournisseur.data.filter(u => u.complete == 0);
    });
  }
  
}
