import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeReglementModalComponent } from './mode-reglement-modal.component';

describe('ModeReglementModalComponent', () => {
  let component: ModeReglementModalComponent;
  let fixture: ComponentFixture<ModeReglementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeReglementModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeReglementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
