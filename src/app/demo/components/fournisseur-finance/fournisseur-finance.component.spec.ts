import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurFinanceComponent } from './fournisseur-finance.component';

describe('FournisseurFinanceComponent', () => {
  let component: FournisseurFinanceComponent;
  let fixture: ComponentFixture<FournisseurFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
