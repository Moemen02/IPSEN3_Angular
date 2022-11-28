import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteTableComponent } from './waste-table.component';

describe('WasteTableComponent', () => {
  let component: WasteTableComponent;
  let fixture: ComponentFixture<WasteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
