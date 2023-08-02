import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeResponsableComponent } from './type-responsable.component';

describe('TypeResponsableComponent', () => {
  let component: TypeResponsableComponent;
  let fixture: ComponentFixture<TypeResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeResponsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
