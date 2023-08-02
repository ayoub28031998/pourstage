import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteParametrageTaxeComponent } from './societe-parametrage-taxe.component';

describe('SocieteParametrageTaxeComponent', () => {
  let component: SocieteParametrageTaxeComponent;
  let fixture: ComponentFixture<SocieteParametrageTaxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteParametrageTaxeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocieteParametrageTaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
