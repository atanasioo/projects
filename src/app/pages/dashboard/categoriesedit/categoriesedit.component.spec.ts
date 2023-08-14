import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieseditComponent } from './categoriesedit.component';

describe('CategorieseditComponent', () => {
  let component: CategorieseditComponent;
  let fixture: ComponentFixture<CategorieseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieseditComponent]
    });
    fixture = TestBed.createComponent(CategorieseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
