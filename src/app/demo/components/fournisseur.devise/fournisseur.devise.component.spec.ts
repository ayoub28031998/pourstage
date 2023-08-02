import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurDeviseComponent } from './fournisseur.devise.component';

describe('FournisseurDeviseComponent', () => {
  let component: FournisseurDeviseComponent;
  let fixture: ComponentFixture<FournisseurDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurDeviseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
