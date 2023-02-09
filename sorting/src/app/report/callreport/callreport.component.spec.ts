import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallreportComponent } from './callreport.component';

describe('CallreportComponent', () => {
  let component: CallreportComponent;
  let fixture: ComponentFixture<CallreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
