import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorymComponent } from './historym.component';

describe('HistorymComponent', () => {
  let component: HistorymComponent;
  let fixture: ComponentFixture<HistorymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
