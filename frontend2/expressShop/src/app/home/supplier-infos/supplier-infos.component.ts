import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/models/supplier';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators/';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-supplier-infos',
  templateUrl: './supplier-infos.component.html',
  styleUrls: ['./supplier-infos.component.css']
})
export class SupplierInfosComponent implements OnInit {

  private supplierId: number;
  private loadedSuppliers: Observable<Supplier[]>;
  private dataSource: MatTableDataSource<Supplier>;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.queryParams
      .pipe(filter(params => params.s))
      .subscribe(params => {
        console.log(params);
        this.supplierId = params.s;
      });
    this.requestAllUser();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  requestAllUser() {
    this.loadedSuppliers = this.userService.getAllSuppliers();
    this.loadedSuppliers.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
  }
}
