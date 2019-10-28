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
  TabCommande: Commandes[];
  Products : CommandesItems[];
  WaitingTime : number;
  EstOuvert = 0;
  selectedrow : string;
  lastrow : number;

  subscription: Subscription;
  public dataSource = new MatTableDataSource<Commandes>();
  public displayedColumns = ['idCommande', 'dateCreation', 'nomFournisseur', 'EmailFournisseur','telephone'];
  public itemsColumns = ['nom', 'prix', 'quantite','description'];

  constructor(private auth: AuthService, private commandeService: CommandeService, private loader: LoaderService) {
    let i = 0;
    this.commandeService.GetCommande(this.auth.currUser.iduser).subscribe(commandes => {
      this.CommandesEnCour = commandes;
      commandes.forEach(Numcommande => {
        console.log(Numcommande.complete);
        this.CommandesEnCour[i].telephone=  "+1 " + Numcommande.telephone;
        //this.CommandesEnCour[i].DateCreation=  Numcommande.DateCreation.toLocaleString();
        i++;
      });
      this.dataSource.data =  this.CommandesEnCour;
      this.dataSource.data = this.dataSource.data.filter(u => u.complete == 0);
      this.loader.hide();
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

  
}
