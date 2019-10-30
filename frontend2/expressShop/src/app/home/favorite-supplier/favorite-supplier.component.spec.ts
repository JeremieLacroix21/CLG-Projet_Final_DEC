import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSupplierComponent } from './favorite-supplier.component';

describe('FavoriteSupplierComponent', () => {
  let component: FavoriteSupplierComponent;
  let fixture: ComponentFixture<FavoriteSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
