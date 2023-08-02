import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurFinanceModalComponent } from './fournisseur-finance-modal.component';

describe('FournisseurFinanceModalComponent', () => {
  let component: FournisseurFinanceModalComponent;
  let fixture: ComponentFixture<FournisseurFinanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurFinanceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurFinanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
