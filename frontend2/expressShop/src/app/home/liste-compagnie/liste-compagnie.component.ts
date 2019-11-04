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
  selector: 'app-liste-compagnie',
  templateUrl: './liste-compagnie.component.html',
  styleUrls: ['./liste-compagnie.component.css']
})
export class ListeCompagnieComponent implements OnInit {
  
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
    this.userservice.getAllSuppliers
    this.subscription = this.userservice.getAllSuppliers();
      this.subscription.subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        console.log(data);
      });
  }
}
