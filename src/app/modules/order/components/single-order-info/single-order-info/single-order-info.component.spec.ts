import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOrderInfoComponent } from './single-order-info.component';

describe('SingleOrderInfoComponent', () => {
  let component: SingleOrderInfoComponent;
  let fixture: ComponentFixture<SingleOrderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOrderInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleOrderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
