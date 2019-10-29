import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/models/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators/';
import { UserService } from 'src/app/services';
import { LoaderService } from 'src/app/services/loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-supplier-infos',
  templateUrl: './supplier-infos.component.html',
  styleUrls: ['./supplier-infos.component.css']
})



export class SupplierInfosComponent implements OnInit {

 // google maps zoom level
 zoom: number = 8;
  
 // initial center position for the map
 lat: number = 45.864635;
 lng: number = -70.857655;
  

  private supplierId: number;
  private profileToShow: Supplier;
  private loadedSuppliers: Observable<Supplier[]>;
  private dataSource: MatTableDataSource<Supplier>;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private loader: LoaderService) {
  }

  ngOnInit() {
    this.route.queryParams
      .pipe(filter(params => params.s))
      .subscribe(params => {
        this.supplierId = params.s;
      });
    this.requestAllUser();
  }

  changeQuery(supplier: Supplier) {
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { s: supplier.iduser }});
    this.profileToShow = supplier;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  requestAllUser() {
    this.loader.show("Chargement des fournisseurs...");
    this.loadedSuppliers = this.userService.getAllSuppliers();
    this.loadedSuppliers.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      if (this.supplierId)
        this.profileToShow = this.dataSource.data.find(s => s.iduser == this.supplierId);
      this.loader.hide();
    });
  }

  onClickSupplier(supplier: Supplier) {
    this.changeQuery(supplier);
  }

  onClickCollapseBtn(event) {
    let btn = document.getElementById('collapseBtn');

    // Rotate the icon
    for(var i = 0; i < btn.children.length; ++i) {
      btn.children[i].classList.toggle('rotatedIcon');
    }

    // Toggle the favorite attribute
    btn.attributes['collapsed'].value = (btn.attributes['collapsed'].value === 'false' ? 'true' : 'false');
  }
}
