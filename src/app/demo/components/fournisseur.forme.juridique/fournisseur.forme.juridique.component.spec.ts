import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurFormeJuridiqueComponent } from './fournisseur.forme.juridique.component';

describe('FournisseurFormeJuridiqueComponent', () => {
  let component: FournisseurFormeJuridiqueComponent;
  let fixture: ComponentFixture<FournisseurFormeJuridiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurFormeJuridiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurFormeJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
