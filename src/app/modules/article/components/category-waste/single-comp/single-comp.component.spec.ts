import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompComponent } from './single-comp.component';

describe('SingleCompComponent', () => {
  let component: SingleCompComponent;
  let fixture: ComponentFixture<SingleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
