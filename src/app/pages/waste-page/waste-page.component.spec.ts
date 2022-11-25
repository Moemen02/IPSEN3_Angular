import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WastePageComponent } from './waste-page.component';

describe('WastePageComponent', () => {
  let component: WastePageComponent;
  let fixture: ComponentFixture<WastePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WastePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WastePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
