import { Component, OnInit } from '@angular/core';
import { Commandes } from '../../models/commandes';
import { AuthService } from 'src/app/services';
import { Subscription } from 'rxjs';
import { CommandeService } from '../../services/commande.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  CommandesEnCour: Commandes[];
  CommandesTerminé: Commandes[];
  subscription: Subscription;

  constructor(private auth: AuthService, private commandeService: CommandeService, private loader: LoaderService) {
    this.commandeService.GetCommande(this.auth.currUser,true).subscribe(commandes => {
      this.CommandesEnCour = commandes
      setTimeout(() => {
        this.loader.hide();
      });
    });
  }

  ngOnInit() {
    //loader les commandes
    this.loader.show("Chargement des commandes...");
  }
 
}
