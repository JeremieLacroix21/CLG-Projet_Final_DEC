import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProfileComponent } from './modif-profile.component';

describe('ModifProfileComponent', () => {
  let component: ModifProfileComponent;
  let fixture: ComponentFixture<ModifProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
