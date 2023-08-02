import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurVilleComponent } from './fournisseur.ville.component';

describe('FournisseurVilleComponent', () => {
  let component: FournisseurVilleComponent;
  let fixture: ComponentFixture<FournisseurVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
