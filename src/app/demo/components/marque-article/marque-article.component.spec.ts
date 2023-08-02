import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueArticleComponent } from './marque-article.component';

describe('MarqueArticleComponent', () => {
  let component: MarqueArticleComponent;
  let fixture: ComponentFixture<MarqueArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
