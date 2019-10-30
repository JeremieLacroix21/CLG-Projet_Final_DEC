import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/models/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators/';
import { UserService } from 'src/app/services';
import { LoaderService } from 'src/app/services/loader.service';
import { GeocodeService } from 'src/app/services/maps.service';
import { Location } from 'src/app/models/location-models';
import { ConcatSource } from 'webpack-sources';
import { StarRatingComponent } from 'ng-starrating';
import { AuthService } from 'src/app/services';


@Component({
  selector: 'app-supplier-infos',
  templateUrl: './supplier-infos.component.html',
  styleUrls: ['./supplier-infos.component.css']
})
export class SupplierInfosComponent implements OnInit {

 // google maps zoom level
  zoom: number = 8;
  
 // initial center position for the map
  address : string;
  location: Location;
  rating : number;
  newrating : number;
  ratingreadonly : boolean;
  newnewrating:number;

  private supplierId: number;
  private profileToShow: Supplier;
  private loadedSuppliers: Observable<Supplier[]>;
  private dataSource: MatTableDataSource<Supplier>;
  popupvisible = false;

  constructor( private AuthService : AuthService,private ref: ChangeDetectorRef,private geocodeService : GeocodeService,private router: Router, private route: ActivatedRoute, private userService: UserService, private loader: LoaderService) {
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
    this.address = this.profileToShow.adresse;
    this.rating  = this.profileToShow.nbEtoiles;
    this.newnewrating = 0;
    this.showLocation();
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

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    this.geocodeService.geocodeAddress(this.address)
    .subscribe((location: Location) => {
        this.location = location;
        this.ref.detectChanges();  
      }      
    );       
    console.log(this.address);
  }

  onClickNoterCompagnie()
  {
    this.popupvisible = true;
    let iduser = this.AuthService.currUser.iduser;
    let idfournisseur = this.profileToShow.iduser;
    this.userService.UpdateRating(iduser,idfournisseur,this.newrating).subscribe();
    this.closePopUp();
  }

  openPopUp()
  {
      this.popupvisible = true;
  }
  closePopUp()
  {
    this.popupvisible = false;
  }

  redirectToChat()
  {
      //todo
  }

  onRate($event:{newValue:number}) {
      this.newrating = $event.newValue;
      console.log(this.newrating);
  }
}
