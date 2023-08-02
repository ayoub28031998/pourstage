import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeResponsableModalComponent } from './type-responsable-modal.component';

describe('TypeResponsableModalComponent', () => {
  let component: TypeResponsableModalComponent;
  let fixture: ComponentFixture<TypeResponsableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeResponsableModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeResponsableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
