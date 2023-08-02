import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurPaysComponent } from './fournisseur.pays.component';

describe('FournisseurPaysComponent', () => {
  let component: FournisseurPaysComponent;
  let fixture: ComponentFixture<FournisseurPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurPaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
