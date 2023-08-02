import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurActiviteModalComponent } from './secteur-activite-modal.component';

describe('SecteurActiviteModalComponent', () => {
  let component: SecteurActiviteModalComponent;
  let fixture: ComponentFixture<SecteurActiviteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecteurActiviteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecteurActiviteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
