import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurConventionComponent } from './fournisseur-convention.component';

describe('FournisseurConventionComponent', () => {
  let component: FournisseurConventionComponent;
  let fixture: ComponentFixture<FournisseurConventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurConventionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurConventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
