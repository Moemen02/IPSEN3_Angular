import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLogInfoComponent } from './single-log-info.component';

describe('SingleLogInfoComponent', () => {
  let component: SingleLogInfoComponent;
  let fixture: ComponentFixture<SingleLogInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLogInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
