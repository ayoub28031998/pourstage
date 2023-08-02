import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurLangueComponent } from './fournisseur.langue.component';

describe('FournisseurLangueComponent', () => {
  let component: FournisseurLangueComponent;
  let fixture: ComponentFixture<FournisseurLangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurLangueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurLangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
