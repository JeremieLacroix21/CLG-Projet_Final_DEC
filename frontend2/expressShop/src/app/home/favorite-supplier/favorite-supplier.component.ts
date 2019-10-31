import { Component, OnInit, ViewChild } from '@angular/core';
import { BD_User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/services';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-favorite-supplier',
  templateUrl: './favorite-supplier.component.html',
  styleUrls: ['./favorite-supplier.component.css']
})
export class FavoriteSupplierComponent implements OnInit {
  
  subscription: Observable<BD_User[]>;
  dataSource: MatTableDataSource<BD_User>;
  displayedColumns: string[] = ['nomutilisateur','email','Telephone','description'];
  


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private userservice:UserService,private authservice:AuthService, private loader: LoaderService) { 
    this.initiatedatasource();
    
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  initiatedatasource()
  {
    this.subscription = this.userservice.GetFavoriteSuppliers(this.authservice.currUser.iduser);
      this.subscription.subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        console.log(data);
      });
  }
}
