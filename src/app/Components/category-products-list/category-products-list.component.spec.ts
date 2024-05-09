import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductsListComponent } from './category-products-list.component';

describe('CategoryProductsListComponent', () => {
  let component: CategoryProductsListComponent;
  let fixture: ComponentFixture<CategoryProductsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryProductsListComponent]
    });
    fixture = TestBed.createComponent(CategoryProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
