import { Component, OnInit } from '@angular/core';
import { BD_User } from '../../models/user'
import { UserService } from '../../services/user.service'
import { Observable } from 'rxjs/internal/Observable';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  private loadedUsers: Observable<BD_User[]>;
  private columnsToDisplay = ['id', 'type', 'username', 'firstName', 'lastName', 'email', 'creationDate', 'accepted'];

  constructor(private userService: UserService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.loadedUsers = this.userService.getAll();
    this.spinner.show();
  }
}
