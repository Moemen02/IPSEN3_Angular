import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWasteComponent } from './single-waste.component';

describe('SingleWasteComponent', () => {
  let component: SingleWasteComponent;
  let fixture: ComponentFixture<SingleWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
