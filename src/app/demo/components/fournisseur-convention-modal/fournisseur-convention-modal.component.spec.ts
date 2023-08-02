import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurConventionModalComponent } from './fournisseur-convention-modal.component';

describe('FournisseurConventionModalComponent', () => {
  let component: FournisseurConventionModalComponent;
  let fixture: ComponentFixture<FournisseurConventionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurConventionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurConventionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
