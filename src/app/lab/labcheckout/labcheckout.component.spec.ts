import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcheckoutComponent } from './labcheckout.component';

describe('LabcheckoutComponent', () => {
  let component: LabcheckoutComponent;
  let fixture: ComponentFixture<LabcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
