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
  CommandesTerminé: Commandes[];
  Products : CommandesItems[];
  WaitingTime : number;
  EstOuvert = 0;
  selectedrow : string;
  lastrow : number;

  subscription: Subscription;
  public dataSource = new MatTableDataSource<Commandes>();
  public dataitems = new MatTableDataSource<CommandesItems>();
  public displayedColumns = ['idCommande', 'DateCreation', 'nomFournisseur', 'EmailFournisseur','telephone'];
  public itemsColumns = ['nom', 'prix', 'quantite','description'];

  constructor(private auth: AuthService, private commandeService: CommandeService, private loader: LoaderService) {
    let i = 0;
    let j = 0;
    this.commandeService.GetCommande(this.auth.currUser.iduser,'0').subscribe(commandes => {
     this.WaitingTime = commandes.length * 800;
      commandes.forEach(Nom => {
        this.CommandesEnCour = commandes;
        this.commandeService.GetItems(this.CommandesEnCour[j].idCommande).subscribe(TableauItems =>{
          this.CommandesEnCour[i].TableItem =  TableauItems;
        }
          );
        this.CommandesEnCour[j].DateCreation = Nom['dateCreation']
        this.commandeService.GetFournisseur(Nom['idFournisseur']).subscribe(fournisseur =>{
          this.CommandesEnCour[i].nomFournisseur = fournisseur[0]['nomutilisateur'];
          this.CommandesEnCour[i].EmailFournisseur = fournisseur[0]['email'];
          this.CommandesEnCour[i].telephone = "+1 " + fournisseur[0]['Telephone'];
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.selectedrow = "0";
    this.lastrow = parseInt(this.selectedrow);
    this.loader.show("Chargement des commandes...");
    this.EstOuvert =0;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ChangeRow(){
    console.log(parseInt(this.selectedrow));
    if(this.lastrow != parseInt(this.selectedrow))
    {
      this.lastrow = parseInt(this.selectedrow);

    }
  }

  
}
