import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtStockArticleComponent } from './mvt-stock-article.component';

describe('MvtStockArticleComponent', () => {
  let component: MvtStockArticleComponent;
  let fixture: ComponentFixture<MvtStockArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MvtStockArticleComponent]
    });
    fixture = TestBed.createComponent(MvtStockArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
