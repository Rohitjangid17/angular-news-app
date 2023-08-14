import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemsComponent } from './news-items.component';

describe('NewsItemsComponent', () => {
  let component: NewsItemsComponent;
  let fixture: ComponentFixture<NewsItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsItemsComponent]
    });
    fixture = TestBed.createComponent(NewsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
