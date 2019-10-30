import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BD_User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { MatTableDataSource, MatSort, MatSortModule, MatPaginator, MatSlideToggle } from '@angular/material';
import { HomeComponent } from '../home.component';
import { LoaderService } from 'src/app/services/loader.service';
import { LogItem } from 'src/app/models/log-item';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css',]
})

export class AdminUsersComponent implements OnInit {

  private loadedUsers: Observable<BD_User[]>;
  private dataSourceUsers: MatTableDataSource<BD_User>;
  private columnsToDisplayUsers = ['iduser', 'TypeUser', 'nomutilisateur', 'prenom', 'nom', 'email', 'dateinscription', 'confirme', 'actions'];

  private loadedLogs: Observable<LogItem[]>;
  private dataSourceLog: MatTableDataSource<LogItem>;
  private columnsToDisplayLog = ['timestamp', 'log'];

  private logsAreShown = false;

  constructor(private userService: UserService, private loader: LoaderService) {
  }

  @ViewChild(MatSort, {static: false})
    set findSort(s: MatSort) {
      if (s && this.dataSourceUsers) {
        if (this.logsAreShown && this.dataSourceLog) {
          this.dataSourceLog.sort = s;
        } else {
          this.dataSourceUsers.sort = s;
        }
        setTimeout(() => {
          this.loader.hide();
        });
      }
    };

  // Inits the mat-toggle elements by giving them the 'isChecked' class if [checked] is true
  // See : this.onChangeConfirmRegistration()
  @ViewChild(MatSlideToggle, {static: false})
    set findMatSlideToggle(s: MatSlideToggle) {
      if (!this.logsAreShown && s && s.checked) {
        document.getElementById(s.id).classList.add('isChecked');
      }
    };

  ngOnInit() {
    this.requestAllUser();
  }

  ngOnDestroy() {
  }

  applyFilter(filterValue: string) {
    this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
    this.dataSourceLog.filter = filterValue.trim().toLowerCase();
  }
  
  formatLog(item: LogItem) {
    let format = "";
    
    if (item.type == 0) {
      format = 'Le compte ' + item.username + ' a été créé';
    } else if (item.type == 1) {
      format = "L'utilisateur " + item.username + " a passé une commande au fournisseur " + item.data;
    } else if (item.type == 2) {
      format = "L'utilisateur " + item.username + " a ajouter le produit " + item.data + " à son inventaire";
    } else if (item.type == 3) {
      format = "L'utilisateur " + item.username + " a retirer le produit " + item.data + " de son inventaire";
    }

    return format;
  }

  requestLogs() {
    this.logsAreShown = !this.logsAreShown;

    if (this.dataSourceLog) {
      return;
    }

    this.loader.show("Chargement des activités...");
    
    this.loadedLogs = this.userService.getLogs();
    this.loadedLogs.subscribe(data => {
      this.dataSourceLog = new MatTableDataSource(data);
      this.dataSourceLog.filterPredicate = (data: LogItem, filter: string) => {
        return filter.trim().toLowerCase().includes(this.formatLog(data).trim().toLowerCase());
      };
    });
  }

  requestAllUser() {
    this.loader.show("Chargement des utilisateurs...");

    this.loadedUsers = this.userService.getAll();
    this.loadedUsers.subscribe(data => {
      this.dataSourceUsers = new MatTableDataSource(data);
    });
  }

  onChangeConfirmRegistration(event) {
    // The mat-slide-toggle [checked] value is broken
    // Use a class to keep the "real" [checked] value on the html element and set [checked] here
    let sourceAsElement = document.getElementById(event.source.id);
    sourceAsElement.classList.toggle('isChecked');

    let newCheckedValue = sourceAsElement.classList.contains('isChecked');

    let messageConfirmBlock = "Êtes-vous sûr de vouloir bloquer cet utilisateur ?";
    let messageConfirmUnblock = "Êtes-vous sûr de vouloir débloquer cet utilisateur ?" +
      "\nIl gagnera accès aux fonctionnalitées majeures du site en fonction de son type de compte.";

    if (confirm(newCheckedValue ? messageConfirmUnblock : messageConfirmBlock)) {
      // Manually check/uncheck the mat-slide-toggle element
      event.source.checked = newCheckedValue;

      // Get the user id from the sender
      let userIdToConfirm = event.source.id.split('-')[2];

      //this.spinner.show();
      this.loader.show("Mise à jour de l'utilisateur...");

      // Call the api to update the user
      this.userService.updateConfirmRegistration(userIdToConfirm, event.checked).subscribe(data => {
        this.loader.hide();
      });

      // Update the user locally
      this.dataSourceUsers.data.find(u => u.iduser == userIdToConfirm).confirme = event.checked;
    } else {
      sourceAsElement.classList.toggle('isChecked');
      event.source.checked = !newCheckedValue;
    }
  }

  onClickDeleteAccount(event) {
    let messageConfirmDelete = "Êtes-vous sûr de vouloir supprimer cet utilisateur ?" +
      "\nToute les données associées au compte seront perdues définitivement.";

    if (confirm(messageConfirmDelete)) {
      // Get the user id from the sender
      let senderBtn = document.getElementById(event.currentTarget.id);
      let userIdToDelete = parseInt(senderBtn.id.split('-')[2]);
      
      this.loader.show("Suppression de l'utilisateur...");

      // Call the api to delete the user
      this.userService.deleteUser(userIdToDelete).subscribe(data => {
        this.loader.hide();
      });

      // Delete the user locally
      this.dataSourceUsers.data = this.dataSourceUsers.data.filter(u => u.iduser != userIdToDelete);
    }
  }
}
