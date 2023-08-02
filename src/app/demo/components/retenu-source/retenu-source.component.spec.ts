import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetenuSourceComponent } from './retenu-source.component';

describe('RetenuSourceComponent', () => {
  let component: RetenuSourceComponent;
  let fixture: ComponentFixture<RetenuSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetenuSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetenuSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
