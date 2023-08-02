import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteParametrageTaxeModalComponent } from './societe-parametrage-taxe-modal.component';

describe('SocieteParametrageTaxeModalComponent', () => {
  let component: SocieteParametrageTaxeModalComponent;
  let fixture: ComponentFixture<SocieteParametrageTaxeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteParametrageTaxeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocieteParametrageTaxeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
