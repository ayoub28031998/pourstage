import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireModalComponent } from './inventaire-modal.component';

describe('InventaireModalComponent', () => {
  let component: InventaireModalComponent;
  let fixture: ComponentFixture<InventaireModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventaireModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventaireModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
