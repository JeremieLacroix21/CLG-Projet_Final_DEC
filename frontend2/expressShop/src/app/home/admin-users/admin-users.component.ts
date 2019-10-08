import { Component, OnInit, ViewChild } from '@angular/core';
import { BD_User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { MatTableDataSource, MatSort, MatSortModule, MatPaginator, MatSlideToggle } from '@angular/material';
import { HomeComponent } from '../home.component';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit {

  private loadedUsers: Observable<BD_User[]>;
  public loadingText: string;

  private dataSource: MatTableDataSource<BD_User>;
  private columnsToDisplay = ['iduser', 'TypeUser', 'nomutilisateur', 'prenom', 'nom', 'email', 'dateinscription', 'confirme', 'actions'];

  constructor(private userService: UserService, private loader: LoaderService) {
  }

  @ViewChild(MatSort, {static: false})
    set findSort(s: MatSort) {
      if (s && this.dataSource) {
        this.dataSource.sort = s;
        setTimeout(() => {
          this.loader.hide();
        });
      }
    };

  // Inits the mat-toggle elements by giving them the 'isChecked' class if [checked] is true
  // See : this.onChangeConfirmRegistration()
  @ViewChild(MatSlideToggle, {static: false})
    set findMatSlideToggle(s: MatSlideToggle) {
      if (s && s.checked) {
        document.getElementById(s.id).classList.add('isChecked');
      }
    };

  ngOnInit() {
    this.requestAllUser();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  requestAllUser() {
    this.loader.show("Chargement des utilisateurs...");

    this.loadedUsers = this.userService.getAll();
    this.loadedUsers.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
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
      this.dataSource.data.find(u => u.iduser == userIdToConfirm).confirme = event.checked;
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
      this.dataSource.data = this.dataSource.data.filter(u => u.iduser != userIdToDelete);
    }
  }
}
