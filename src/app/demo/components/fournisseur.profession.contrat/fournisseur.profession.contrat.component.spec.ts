import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurProfessionContratComponent } from './fournisseur.profession.contrat.component';

describe('FournisseurProfessionContratComponent', () => {
  let component: FournisseurProfessionContratComponent;
  let fixture: ComponentFixture<FournisseurProfessionContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurProfessionContratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurProfessionContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
