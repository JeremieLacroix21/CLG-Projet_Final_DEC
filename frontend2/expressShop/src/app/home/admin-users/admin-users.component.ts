import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users'
import { UserService } from '../../services/user.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  usersLoaded: Promise<boolean>;
  loadedUser: User[];

  constructor(private userService: UserService) {this.initUsers(); }

  ngOnInit() {
  }

  private initUsers() {
    this.userService.getAll().subscribe(
      data => {
        this.loadedUser = data;
        this.usersLoaded = Promise.resolve(true);
      }
    );
  }

}
