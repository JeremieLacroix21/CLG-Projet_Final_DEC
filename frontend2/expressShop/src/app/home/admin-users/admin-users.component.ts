import { Component, OnInit, ViewChild } from '@angular/core';
import { BD_User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { NgxSpinnerService } from "ngx-spinner";
import { MatTableDataSource, MatSort, MatSortModule, MatPaginator, MatSlideToggle } from '@angular/material';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  private loadedUsers: Observable<BD_User[]>;
  test: MatSlideToggle;

  private dataSource: MatTableDataSource<BD_User>;
  private columnsToDisplay = ['iduser', 'TypeUser', 'nomutilisateur', 'prenom', 'nom', 'email', 'dateinscription', 'confirme', 'actions'];

  @ViewChild(MatSort, {static: false})
    set findSort(s: MatSort) {
      if (s && this.dataSource) {
        this.dataSource.sort = s;
      }
    };

  constructor(private userService: UserService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.requestAllUser();
    this.spinner.show();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  
  
  requestAllUser() {
    this.loadedUsers = this.userService.getAll();
    this.loadedUsers.subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  onChangeConfirmRegistration(event) {
    let messageConfirmBlock = "Êtes-vous sûr de vouloir bloquer cet utilisateur ?";
    let messageConfirmUnblock = "Êtes-vous sûr de vouloir débloquer cet utilisateur ?" +
      "\nIl gagnera accès aux fonctionnalitées majeures du site en fonction de son type de compte.";

    if (window.confirm(event.checked ? messageConfirmUnblock : messageConfirmBlock)) {
      // Get the user id from the sender
      let userIdToConfirm = event.source.id.split('-')[2];

      // TODO: Call UpdateConfirmRegistration(userIdToConfirm, event.checked)

      // Update the user locally
      this.dataSource.data.find(u => u.iduser == userIdToConfirm).confirme = event.checked;
    }
  }

  onClickDeleteAccount(event) {
    let messageConfirmDelete = "Êtes-vous sûr de vouloir supprimer cet utilisateur ?" +
      "\nToute les données associées au compte seront perdues définitivement.";

    if (window.confirm(messageConfirmDelete)) {
      // Get the user id from the sender
      let senderBtn = document.getElementById(event.currentTarget.id);
      let userIdToDelete = parseInt(senderBtn.id.split('-')[2]);
      
      // TODO: Call DeleteUser(userIdToDelete)

      // Delete the user locally
      this.dataSource.data = this.dataSource.data.filter(u => u.iduser != userIdToDelete);
    }
  }
}
