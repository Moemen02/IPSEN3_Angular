import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWasteComponent } from './category-waste.component';

describe('CategoryWasteComponent', () => {
  let component: CategoryWasteComponent;
  let fixture: ComponentFixture<CategoryWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
