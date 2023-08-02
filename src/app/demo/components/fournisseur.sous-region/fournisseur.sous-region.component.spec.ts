import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurSousRegionComponent } from './fournisseur.sous-region.component';

describe('FournisseurSousRegionComponent', () => {
  let component: FournisseurSousRegionComponent;
  let fixture: ComponentFixture<FournisseurSousRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurSousRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurSousRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
