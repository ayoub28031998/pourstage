import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurContactComponent } from './fournisseur-contact.component';

describe('FournisseurContactComponent', () => {
  let component: FournisseurContactComponent;
  let fixture: ComponentFixture<FournisseurContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
