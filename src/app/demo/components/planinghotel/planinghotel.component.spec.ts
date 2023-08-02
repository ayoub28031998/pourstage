import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaninghotelComponent } from './planinghotel.component';

describe('PlaninghotelComponent', () => {
  let component: PlaninghotelComponent;
  let fixture: ComponentFixture<PlaninghotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaninghotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaninghotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
